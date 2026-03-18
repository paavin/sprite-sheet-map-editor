import {
  isRouteErrorResponse,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import AppShell from "./components/AppShell";
import Slot from "./components/AppShell/Slot";
import { AppBar, Toolbar, IconButton, Typography, Breadcrumbs } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useLocalStorage } from "usehooks-ts";

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useLocalStorage('side-nav-open', false);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        <AppShell>
          <Slot name="app-bar-slot">
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => {setOpen(!open)}}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                  Photos
                </Typography>
              </Toolbar>
            </AppBar>
          </Slot>
          {children}
        </AppShell>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

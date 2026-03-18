import ActionBar from "~/components/ActionBar";
import type { Route } from "./+types/home";
import SideNav from "~/components/SideNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <ActionBar></ActionBar>
    <SideNav/>
  </>;
}

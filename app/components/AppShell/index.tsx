import styled from "@emotion/styled";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

const Shell = styled("div")(() => ({
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateAreas: `
            "appbar appbar appbar"
            "actionbar actionbar actionbar"
            "sidenav content infobox"
        `,
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    height: '100%'
}));
const AppBarSlot = styled("div")(() => ({
    gridArea: 'appbar'
}));
const ActionBarSlot = styled("div")(() => ({
    gridArea: 'actionbar',
    '&:empty': {
        display: 'none'
    }
}));
const SideNavSlot = styled("div")(() => ({
    gridArea: 'sidenav',
    overflow: 'auto',
    minHeight: 0,
    '&:empty': {
        display: 'none'
    }
}));
const Main = styled("div")(() => ({
    gridArea: 'content',
    overflow: 'auto',
    minHeight: 0,
    minWidth: 0
}));
const InfoBoxSlot = styled("aside")(() => ({
    gridArea: 'infobox',
    overflow: 'auto',
    minHeight: 0,
    '&:empty': {
        display: 'none'
    }
}));

export default function AppShell({ children }: { children: ReactNode }) {
    return (<Shell>
        <AppBarSlot id="app-bar-slot" />
        <ActionBarSlot id="action-bar-slot" />
        <SideNavSlot id="side-nav-slot" />
        <Main id="main-content">
            {children}
        </Main>
        <InfoBoxSlot id="info-box-slot"/>
    </Shell>);
}
import { Breadcrumbs, css, Link, Typography, type Theme } from "@mui/material";
import Slot from "../AppShell/Slot";
import styled from "@emotion/styled";

const Bread = styled(Breadcrumbs)(() => ({
    backgroundColor: '#fff',
    borderBottom: '2px solid #ccc',
    padding: 8
}));

export default function ActionBar() {
    return (
        <Slot name="action-bar-slot">
            <Bread aria-label="breadcrumb">
                <Typography sx={{ color: 'text.primary' }}>Home</Typography>
            </Bread>
        </Slot>
    );
}
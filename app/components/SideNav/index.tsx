import Slot from "../AppShell/Slot";
import { useLocalStorage } from "usehooks-ts";
import styled from "@emotion/styled";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Link } from "react-router";

const Drawer = styled.ul<{$open?: boolean}>`
    width: ${props => props.$open ? 128 : 32}px;
    background-color: #fff;
    transition: width .125s ease-in-out;
    height: 100%;
    border-right: 2px solid #ccc;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
`;

const Item = styled(Link)`
    display: block;
    border-radius: 10px;
    min-width: 120px;
`;

export default function SideNav() {
    const [open, _] = useLocalStorage('side-nav-open', false);
    return (<Slot name="side-nav-slot">
        <Drawer $open={open}>
            <Item to={'#'}><HomeRoundedIcon/> Home</Item>
            <Item to={'#'}><SettingsRoundedIcon/> Settings</Item>
        </Drawer>
    </Slot>);
}
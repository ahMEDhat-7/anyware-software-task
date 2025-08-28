import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {  Stack } from "@mui/material";
import { useState } from "react";
import styles from './SideBar.module.css';
import { sideBarLinks } from "../../data/sidebarLinks";
import SideBarLink from "./SideBarLink";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className={styles.menuButton}
                onClick={toggleSidebar}
                aria-label="Toggle menu"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <h1 className={styles.logo}><Link to={'/'}>Coligo</Link></h1>
                <nav className={styles.nav}>
                    <ul>
                        <Stack spacing={2}>
                            {sideBarLinks.map((item, index) => (
                                <SideBarLink key={index} link={item}/>
                            ))}
                        </Stack>
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default SideBar
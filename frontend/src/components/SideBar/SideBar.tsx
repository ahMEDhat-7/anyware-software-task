import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import CampaignIcon from '@mui/icons-material/Campaign';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from "@mui/material";
import { useState } from "react";
import type { SideBarLink } from "../../utils/types";
import styles from './SideBar.module.css';


const sideBarLinks: SideBarLink[] = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon: <HomeRoundedIcon />,
    },
    {
        title: "Schedule",
        link: "/#",
        icon: <CalendarMonthIcon />
    },
    {
        title: "Courses",
        link: "/#",
        icon: <DescriptionIcon />
    },
    {
        title: "Gradebook",
        link: "/#",
        icon: <SchoolIcon />
    },
    {
        title: "Performance",
        link: "/#",
        icon: <TrendingUpRoundedIcon />
    },
    {
        title: "Announcements",
        link: "/#",
        icon: <CampaignIcon />
    }
];

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
                                <Link to={item.link} key={index} className={styles.navLink}>
                                    <div className={styles.flex}>
                                        {item.icon}
                                        <h5>{item.title}</h5>
                                    </div>
                                </Link>
                            ))}
                        </Stack>
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default SideBar
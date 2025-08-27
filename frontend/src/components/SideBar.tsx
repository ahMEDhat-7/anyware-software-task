import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Stack } from "@mui/material";
import type { SideBarLink } from "../utils/types";


const sideBarLinks :SideBarLink []= [
    {
        title:"Dashboard",
        link:"/dashboard",
        icon:<HomeRoundedIcon />,
    },
    {
        title:"Schedule",
        link:"/#",
        icon:<CalendarMonthIcon />
    },
    {
        title:"Courses",
        link:"/#",
        icon:<DescriptionIcon />
    },
    {
        title:"Gradebook",
        link:"/#",
        icon:<SchoolIcon />
    },
    {
        title:"Performance",
        link:"/#",
        icon:<TrendingUpRoundedIcon />
    },
    {
        title:"Announcements",
        link:"/#",
        icon:<CampaignIcon />
    }
];

function SideBar() {
    return (
        <div>
            <h1>Coligo</h1>
            <nav>
                <ul>
                    <Stack spacing={2}>
                        {sideBarLinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>
                                    <div className="flex">
                                        {item.icon}
                                        <h5>{item.title}</h5>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </Stack>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
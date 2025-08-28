// components/sidebarLinks.tsx
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import CampaignIcon from '@mui/icons-material/Campaign';
import type { SideBarLinkType } from '../../utils/types';



export const sideBarLinks: SideBarLinkType[] = [
    { title: "Dashboard", link: "/dashboard", icon: <HomeRoundedIcon /> },
    { title: "Schedule", link: "/schedule", icon: <CalendarMonthIcon /> },
    { title: "Courses", link: "/courses", icon: <DescriptionIcon /> },
    { title: "Gradebook", link: "/gradebook", icon: <SchoolIcon /> },
    { title: "Performance", link: "/performance", icon: <TrendingUpRoundedIcon /> },
    { title: "Announcements", link: "/announcements", icon: <CampaignIcon /> }
];

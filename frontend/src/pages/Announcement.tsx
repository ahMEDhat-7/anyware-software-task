import { Box, List, useMediaQuery, useTheme } from "@mui/material";
import AnnouncementItem from "../components/Announcement/AnnouncementItem";
import { selectAnnouncements } from "../store/slices/announcements.slice";
import { useSelector } from "react-redux";

function Announcement() {
    const announcements = useSelector(selectAnnouncements);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
    return (
        <Box
            component="main"
            sx={{
                marginLeft: isMobile ? 0 : '25%',
                width: isMobile ? '100%' : '75%',
                padding: theme.spacing(3),
                paddingTop: theme.spacing(10),
            }}
        >
            
                <List>
                    {announcements.slice(0, 3).map((announcement, index) => (
                        <AnnouncementItem key={index} announcement={announcement} />
                    ))}
                </List>
        
        </Box>
    );
}

export default Announcement;

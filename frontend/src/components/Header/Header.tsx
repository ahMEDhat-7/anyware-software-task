import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAnnouncements } from '../../store/slices/announcements.slice';
import { selectQuizzes } from '../../store/slices/quizzes.Slice';

const Header = () => {
    const announcements = useSelector(selectAnnouncements);
    const quizzes = useSelector(selectQuizzes);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="absolute" color='inherit' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,width:"75%" ,justifyContent:"space-around" ,left:"25%"}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Welcome message */}
        <Typography variant="h6" sx={{ flexGrow: 1,  display: isMobile ? "none" : "",}}>
          Welcome, User!
        </Typography>

        {/* Search bar */}
        <Box
          sx={{
            display: isMobile ? "none" : 'flex',
            alignItems: 'center',
            backgroundColor: '',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            width: isMobile ? '100%' : '300px',
            mb: isMobile ? 1 : 0,
            
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search"
            fullWidth
            sx={{ ml: 1 }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>

        {/* Icons & Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={announcements.length + quizzes.length } color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Link to={"/profile"}><Avatar alt="User Avatar" src="https://i.pinimg.com/736x/e0/89/07/e089076d1d0467b110c8de292c5c5637.jpg" /></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

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
  useTheme,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAnnouncements } from '../../store/slices/announcements.slice';
import { selectUser } from '../../store/slices/auth.slice';

const Header = () => {
  const announcements = useSelector(selectAnnouncements);
  const user = useSelector(selectUser);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      color="inherit"
      sx={{
        width: { xs: '100%', sm: '75%' },
        ml: { xs: 0, sm: '25%' },
        boxShadow: 1,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: 'flex',flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {!isMobile && (
            <Typography variant="h6" component="div">
              Welcome, {user.username}
            </Typography>
          )}

        </Box>

        {/* Right side: Icons & Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                width: 200,
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
          )}
          <IconButton color="inherit" aria-label="notifications">
            <Badge badgeContent={announcements.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" aria-label="messages">
            <Badge badgeContent={1} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Link to="/profile">
            <Avatar
              alt="User Avatar"
              src={user.avatar}
              sx={{ width: 36, height: 36 }}
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

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
  Button,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAnnouncements, selectAnnouncements } from '../../store/slices/announcements.slice';
import { removeUser, selectUser } from '../../store/slices/auth.slice';
import { clearQuizzes, selectQuizzes } from '../../store/slices/quizzes.Slice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const announcements = useSelector(selectAnnouncements);
  const quizzes = useSelector(selectQuizzes);
  const user = useSelector(selectUser);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [lang, setLang] = useState<string>("en");
  const { i18n } = useTranslation();

  const handleLang = () => {
    i18n.changeLanguage(lang);
    lang === "en" ? setLang("ar") : setLang("en");
  }

  const handleLogout = () => {
    dispatch(removeUser())
    dispatch(clearAnnouncements())
    dispatch(clearQuizzes())
    navigate('/'); 
  };
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
      <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {!isMobile && (
            <Typography variant="h6" component="div">
              Welcome, {user?.username}
            </Typography>
          )}

        </Box>

        {/* Right side: Icons & Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button onClick={handleLang}>{lang}</Button>

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
            <Badge badgeContent={quizzes.length} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Link to="/profile">
            <Avatar
              alt="User Avatar"
              src={user?.avatar}
              sx={{ width: 36, height: 36 }}
            />
          </Link>
          <Button
            onClick={handleLogout}
            color="error"
            variant="outlined"
            sx={{ ml: 1, textTransform: 'none' }}
          >
            <LogoutIcon sx={{ mr: 1 }} />
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

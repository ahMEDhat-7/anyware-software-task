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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="absolute" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,width:"75%" ,left:"25%"}}>
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
            backgroundColor: 'white',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            width: isMobile ? '100%' : '300px',
            mb: isMobile ? 1 : 0,
            
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search..."
            fullWidth
            sx={{ ml: 1 }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>

        {/* Icons & Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={7} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Avatar alt="User Avatar" src="/avatar.png" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

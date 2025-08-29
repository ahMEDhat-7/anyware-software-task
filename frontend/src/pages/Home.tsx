import { Stack, Button, Typography, Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/auth";
import { setUser } from "../store/slices/auth.slice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async() => {
    
      try {
        const data = await userApi.login();
        dispatch(setUser(data));
        navigate('/dashboard');
      } catch (err) {
        console.error('Error fetching announcements:', err);
      }
    
  }
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#f3f4f6'
    }}>

      <Stack
        spacing={4}
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          minWidth: 300
        }}
      >
        <PersonIcon sx={{ fontSize: 48, color: '#2563eb', margin: '0 auto' }} />
        <Typography variant="h5" component="h1" fontWeight="bold" color="primary">
          Login Required
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Please log in to access this page
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold'
          }}
          onClick={handleLogin}
        >
          Login to Continue
        </Button>
      </Stack>
    </Box>
  )
}

export default Home
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnnouncementList from '../components/Announcement/AnnouncementList';
import QuizList from '../components/Quiz/QuizList';
import MiddleDetails from '../components/Middle/MiddleDetails';

function Dashboard() {
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
      <MiddleDetails />
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gap: 3,
          mt: 3
        }}
      >
        <Box>
          <AnnouncementList />
        </Box>
        <Box>
          <QuizList/>
        </Box>
      </Box>
    </Box>
  );
}


export default Dashboard;
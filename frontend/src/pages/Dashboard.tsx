import { Box, Container, Grid } from '@mui/material';
import QuizList from '../components/Quiz/QuizList';
import AnnouncementList from '../components/Announcement/AnnouncementList';
import MiddleDetails from '../components/Middle/MiddleDetails';

function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{
      position: "absolute",
      justifyItems: "center",
      width: "75%",
      left: "25%",
      top: "100px"
    }}>

      {/* Upper Middle Content */}
      <MiddleDetails />

      {/* Content Container */}
      <Box sx={{
        position: "relative",
        width: "100%",
        marginTop: 2,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      }}>
        {/* Two Column Layout */}
        <Grid container >
          {/* Left Content */}
          <AnnouncementList />
          {/* Right Content */}
          <QuizList />
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard;
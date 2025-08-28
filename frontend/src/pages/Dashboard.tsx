import { Box, Container, Grid } from '@mui/material';
import QuizList from '../components/Quiz/QuizList';
import AnnouncementList from '../components/Announcement/AnnouncementList';

function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{
      position: "absolute",
      justifyItems: "center",
      width: "75%",
      height: "calc(100vh - 100px)",
      left: "25%",
      top: "100px"
    }}>

      {/* Upper Middle Content */}
      <Box sx={{
        position: "relative",
        width: "100%",
        height: "30%",
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
      }}>
        <h2>Upper Middle Content</h2>
      </Box>

      {/* Content Container */}
      <Box sx={{
        position: "relative",
        width: "100%",
        height: "70%",
        margin: 3,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      }}>
        {/* Two Column Layout */}
        <Grid container sx={{  height: "100%"}}>
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
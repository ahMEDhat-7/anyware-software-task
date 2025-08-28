import { Box, Container, Grid } from '@mui/material';

function Dashboard() {
  return (
   
    <Container maxWidth="xl" sx={{ position:"absolute",
      justifyItems:"center",
      width:"75%",
      height:"calc(100vh - 100px)",
      left:"25%",
      top:"100px"}}>
    {/* Main Content Area - With Left Margin */}
    
        {/* Upper Middle Content */}
          <Box sx={{
            position:"relative",
            width:"100%",
            height:"30%",
            m: 3,
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
          }}>
            <h2>Upper Middle Content</h2>
          </Box>

        {/* Content Container */}
        <Box sx={{ p: 3 }}>
          {/* Two Column Layout */}
          <Grid container spacing={3}>
            {/* Left Content */}

            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                minHeight: '400px',
              }}
            >
              Left Content
            </Box>


            {/* Right Content */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                minHeight: '400px',
              }}
            >
              Right Content
            </Box>
          </Grid>
        </Box>
        </Container>
  );
}

export default Dashboard;
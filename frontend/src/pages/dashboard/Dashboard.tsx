import { Box, Grid } from '@mui/material';
import Header from '../../components/Header/Header';
import SideBar from "../../components/SideBar/SideBar";

function Dashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh',alignItems:"center" ,justifyContent:"center", rowGap: 10}}>
      <Box>
        <SideBar />
      </Box>


      {/* Main Content Area */}
      <Box
      >
        <Header />
      </Box>

      <Box>
        {/* Upper Middle Content */}
        <Box  sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        p: 3
      }}>
          <h2>Upper Middle Content</h2>
        </Box>

        {/* Two Column Layout */}
        <Box>
          <Grid>
            {/* Left Content */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                p: 3,

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
              }}
            >
              Right Content
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

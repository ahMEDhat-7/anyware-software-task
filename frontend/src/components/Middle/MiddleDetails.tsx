import { Box, Button, Typography } from "@mui/material";

function MiddleDetails() {
  return (
    <Box
      sx={{
        position: "relative",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundImage: `url(https://i.pinimg.com/1200x/17/2d/29/172d295c056b00f1f0172eba8dc22ab5.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "green",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', mb: 2 }}>
        Exam Time
      </Typography>

      <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 1 }}>
        "It's not that I'm so smart, it's just that I stay with problems longer."
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        — Albert Einstein
      </Typography>

      <Button
        variant="outlined"
        color="success"
        href="#exam-tips"
        sx={{ fontWeight: 'bold' }}
      >
        View exam tips
      </Button>
    </Box>
  );
}

export default MiddleDetails;

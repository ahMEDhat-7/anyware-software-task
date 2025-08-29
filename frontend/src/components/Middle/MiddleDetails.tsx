import { Box, Button, Typography } from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function MiddleDetails() {
  const {t} = useTranslation();
    const isArabic = i18next.language === 'ar';

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
        color: "Highlight",
                direction: isArabic ? 'rtl' : 'ltr'

      }}
    >
      <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', mb: 2 }}>
        {t("Exam Time")}
      </Typography>

      <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 1 }}>
        {t("It's not that I'm so smart, it's just that I stay with problems longer.")}
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        — {t("Albert Einstein")}
      </Typography>

      <Button
        variant="contained"
        color="info"
        sx={{ fontWeight: 'bold' }}
      >
       {t("View Exam Tips")}
      </Button>
    </Box>
  );
}

export default MiddleDetails;

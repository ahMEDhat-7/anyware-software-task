import { Box, useMediaQuery, useTheme } from "@mui/material";
import { selectQuizzes } from "../store/slices/quizzes.Slice";
import { useSelector } from "react-redux";
import QuizItem from "../components/Quiz/QuizItem";

function Quiz() {
  const quizzes = useSelector(selectQuizzes);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="main"
      sx={{
        marginLeft: isMobile ? 0 : "25%",
        width: isMobile ? "100%" : "75%",
        padding: theme.spacing(3),
        paddingTop: theme.spacing(10),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: theme.spacing(2),
        }}
      >
        {quizzes.map((quiz, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(50% - 8px)",
              minWidth: isMobile ? "100%" : "calc(50% - 8px)",
            }}
          >
            <QuizItem quiz={quiz} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Quiz;

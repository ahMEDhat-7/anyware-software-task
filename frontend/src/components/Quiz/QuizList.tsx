import { useSelector, useDispatch } from 'react-redux';
import { selectQuizzes, setQuizzes } from '../../store/slices/quizzes.Slice';
import {
  Box,
  Typography,
  List,
  Button,
  CircularProgress,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { quizzesApi } from '../../api/quizzes';
import QuizItem from './QuizItem';
import { Link } from 'react-router-dom';

function QuizList() {
  const dispatch = useDispatch();
  const quizzes = useSelector(selectQuizzes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await quizzesApi.getAllUpComingQuizzes();
        dispatch(setQuizzes(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch quizzes');
        console.error('Error fetching quizzes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [dispatch]);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        p: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" component="h2" color="#1e1e99">
              What&apos;s Due
            </Typography>
            <Typography variant="subtitle2" component="p" color="#1e1e99">
              This Section for Upcoming Quizzes
            </Typography>
          </Box>
           <Link to="/quizzes">
                        <Button variant="text" size="small">
                            All
                        </Button>
                    </Link>
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
          <Typography>{error}</Typography>
        </Box>
      ) : (
        <List>
          {quizzes.slice(0, 2).map((quiz, index) => (
            <QuizItem key={index} quiz={quiz} />
          ))}
        </List>
      )}
    </Box>
  );
}

export default QuizList;

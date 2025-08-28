import { useSelector, useDispatch } from 'react-redux';
import { selectQuizzes, setQuizzes } from '../../store/quizzes/quizzesSlice';
import { Box, Typography, List, ListItem, ListItemText, Chip, Button, CircularProgress } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';
import { quizzesApi } from '../../services/quizzes.service';

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
        const data = await quizzesApi.getAllQuizzes();
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

  const getDueStatus = (dueDate: Date) => {
    const now = new Date();
    const timeLeft = dueDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) return { label: 'Overdue', color: 'error' };
    if (daysLeft === 0) return { label: 'Due Today', color: 'warning' };
    if (daysLeft <= 3) return { label: 'Due Soon', color: 'info' };
    return { label: 'Upcoming', color: 'success' };
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 2
      }}>
        <Typography variant="h6" component="h2">
          Quizzes
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<AssignmentIcon />}
          size="small"
        >
          View All
        </Button>
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
        <List sx={{ 
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 1
        }}>
          {quizzes.map((quiz, index) => {
            const status = getDueStatus(new Date(quiz.dueDate));
            return (
              <ListItem
                key={quiz._id}
                divider={index !== quizzes.length - 1}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 1,
                  py: 1.5
                }}
              >
                <ListItemText
                  primary={quiz.topic}
                  secondary={quiz.course}
                  sx={{ mb: { xs: 1, sm: 0 } }}
                />
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  ml: { xs: 0, sm: 'auto' }
                }}>
                  <Typography variant="body2" color="text.secondary">
                    Due {formatDistanceToNow(new Date(quiz.dueDate), { addSuffix: true })}
                  </Typography>
                  <Chip
                    label={status.label}
                    color={status.color as any}
                    size="small"
                    sx={{ minWidth: 80 }}
                  />
                </Box>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
}

export default QuizList;
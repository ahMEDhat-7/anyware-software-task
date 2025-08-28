import { useSelector, useDispatch } from 'react-redux';
import { selectQuizzes, setQuizzes } from '../../store/slices/quizzesSlice';
import { Box, Typography, List, Button, CircularProgress } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState, useEffect } from 'react';
import { quizzesApi } from '../../api/quizzes';
import QuizItem from './QuizItem';

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
        <Box sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
            p: 3,
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
            }}>
                <Typography variant="h6" component="h2" color='#1e1e99'>
                    What's Due
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
                }}>
                    {quizzes.slice(0,2).map((quiz, index) => {
                        return (
                            <QuizItem key={index} quiz={quiz} />
                        );
                    })}
                </List>
            )}
        </Box>
    );
}

export default QuizList;
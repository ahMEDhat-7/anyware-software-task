import  { Card, CardContent, Typography, Box } from '@mui/material';
import type { QuizType } from '../../utils/types';

function QuizItem({ quiz }: { quiz: QuizType }) {
    return (
         <Card variant="outlined" sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {quiz.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Topic: {quiz.topic}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Course: {quiz.course}
                </Typography>
                <Box mt={1}>
                    <Typography variant="body2" color="text.secondary">
                        Due: {new Date(quiz.dueDate).toLocaleDateString()}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default QuizItem
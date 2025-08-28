import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import type { QuizType } from '../../utils/types';

function QuizItem({ quiz }: { quiz: QuizType }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="h6" component="div" gutterBottom>
                        {quiz.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Topic: {quiz.topic}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        Course: {quiz.course}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Due To: {quiz.dueDate}
                    </Typography>

                    <Button
                        variant="outlined"
                        size="medium"
                        sx={{

                            fontStyle: "bold",
                            width: "100%"
                        }}
                    >Start Quiz
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default QuizItem
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { AnnouncementType } from '../../utils/types';

function AnnouncementItem({ announcement }: { announcement: AnnouncementType }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {announcement.author}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {announcement.topic}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {announcement.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AnnouncementItem
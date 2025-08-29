import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import type { AnnouncementType } from '../../utils/types';

function AnnouncementItem({ announcement }: { announcement: AnnouncementType }) {
    return (
        <Card variant="outlined" sx={{marginBottom:1}}>
            <CardContent>
                <Box display="flex" gap={2}>
                    <Avatar src='https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'/>
                   <Box>
                     <Typography variant="subtitle1" component="h6" gutterBottom>
                        {announcement.author}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {announcement.topic}
                    </Typography>
                   </Box>
                   <Box>
                     <Typography variant="body2" color="text.secondary">
                        {announcement.content}
                    </Typography>
                   </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AnnouncementItem
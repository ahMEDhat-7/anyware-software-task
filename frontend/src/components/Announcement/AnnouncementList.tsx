import { useSelector, useDispatch } from 'react-redux';
import { selectAnnouncements, setAnnouncements } from '../../store/slices/announcements.slice';
import { Box, Typography, List, Button, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { announcementsApi } from '../../api/announcements';
import AnnouncementItem from './AnnouncementItem';

function AnnouncementList() {
    const dispatch = useDispatch();
    const announcements = useSelector(selectAnnouncements);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await announcementsApi.getALLRecentAnnouncements();
                dispatch(setAnnouncements(data));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch announcements');
                console.error('Error fetching announcements:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, [dispatch]);


    return (
        <Box sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
            p: 2,
            marginRight: 3
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent:"space-between",
                mb: 2
            }}>
                <Box>
                    <Typography variant="h6" component="h2" color='#1e1e99'>
                        Announcments
                    </Typography>
                    <Typography variant="subtitle1" component="p" color='#1e1e99'>
                        This Section for Announcments
                    </Typography>
                </Box>
                <Button
                    variant="text"
                    size="large">
                    All
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
                    {announcements.slice(0, 3).map((announcement, index) => {
                        return (
                            <AnnouncementItem key={index} announcement={announcement} />
                        );
                    })}
                </List>
            )}
        </Box>
    );
}

export default AnnouncementList;
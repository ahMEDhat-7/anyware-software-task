import axios from "axios"
import type { AnnouncementType } from '../utils/types';


export const announcementsApi = {
    // Get all announcements
    getAllAnnouncements: async () => {
        const response = await axios.get(`/api/announcements`);
        return response.data;
    },

    // Get a single Announcement by ID
    getAnnouncementById: async (id: string) => {
        const response = await axios.get(`/api/announcements/${id}`);
        return response.data;
    },

    // Create a new Announcement
    createAnnouncement: async (Announcement: Omit<AnnouncementType, '_id'>) => {
        const response = await axios.post(`/api/announcements`, Announcement);
        return response.data;
    },

    // Update a Announcement
    updateAnnouncement: async (id: string, Announcement: Partial<AnnouncementType>) => {
        const response = await axios.patch(`/api/announcements/${id}`, Announcement);
        return response.data;
    },

    // Delete a Announcement
    deleteAnnouncement: async (id: string) => {
        const response = await axios.delete(`/api/announcements/${id}`);
        return response.data;
    }
};

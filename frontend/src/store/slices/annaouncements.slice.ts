import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AnnouncementType, AnnouncementState } from '../../utils/types';
import type { RootState } from '../store';

const initialState: AnnouncementState = {
  announcements: [],
};

export const announcementsSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    setAnnouncements: (state, action: PayloadAction<AnnouncementType[]>) => {
      state.announcements = action.payload;
    },
    addAnnouncement: (state, action: PayloadAction<AnnouncementType>) => {
      state.announcements.push(action.payload);
    },
    updateAnnouncement: (state, action: PayloadAction<{ index: number; announcement: AnnouncementType }>) => {
      const { index, announcement } = action.payload;
      if (index >= 0 && index < state.announcements.length) {
        state.announcements[index] = announcement;
      }
    },
    deleteAnnouncement: (state, action: PayloadAction<number>) => {
      state.announcements.splice(action.payload, 1);
    },
    clearAnnouncements: (state) => {
      state.announcements = [];
    },
  },
});

export const { 
  setAnnouncements, 
  addAnnouncement, 
  updateAnnouncement, 
  deleteAnnouncement, 
  clearAnnouncements 
} = announcementsSlice.actions;

export const selectAnnouncements = (state: RootState) => state.announcement.announcements;
export const selectAnnouncementById = (state: RootState, index: number) => 
  state.announcement.announcements[index];

export default announcementsSlice.reducer;
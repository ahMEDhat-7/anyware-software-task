import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizzes.Slice';
import { announcementsSlice } from './slices/announcements.slice';
import {authSlice} from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    quiz: quizSlice.reducer,
    announcement:announcementsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
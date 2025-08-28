import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizzesSlice';
import { announcementsSlice } from './slices/annaouncements.slice';

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    announcement:announcementsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
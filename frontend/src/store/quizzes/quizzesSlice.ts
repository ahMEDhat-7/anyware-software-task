import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuizState, QuizType } from '../../utils/types';

const initialState: QuizState = {
  quizzes: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<QuizType[]>) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action: PayloadAction<QuizType>) => {
      state.quizzes.push(action.payload);
    },
    updateQuiz: (state, action: PayloadAction<{ index: number; quiz: QuizType }>) => {
      const { index, quiz } = action.payload;
      if (index >= 0 && index < state.quizzes.length) {
        state.quizzes[index] = quiz;
      }
    },
    deleteQuiz: (state, action: PayloadAction<number>) => {
      state.quizzes.splice(action.payload, 1);
    },
    clearQuizzes: (state) => {
      state.quizzes = [];
    },
  },
});

export const { 
  setQuizzes, 
  addQuiz, 
  updateQuiz, 
  deleteQuiz, 
  clearQuizzes 
} = quizSlice.actions;

export const selectQuizzes = (state: { quiz: QuizState }) => state.quiz.quizzes;
export const selectQuizById = (state: { quiz: QuizState }, index: number) => 
  state.quiz.quizzes[index];

export default quizSlice.reducer;
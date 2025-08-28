import axios from "axios"
import type { QuizType } from '../utils/types';


export const quizzesApi = {
    // Get all quizzes
    getAllQuizzes: async () => {
        const response = await axios.get(`/api/quizzes`);
        return response.data;
    },

    getAllUpComingQuizzes: async () => {
        const response = await axios.get(`/api/quizzes/upcoming`);
        return response.data;
    },

    // Get a single quiz by ID
    getQuizById: async (id: string) => {
        const response = await axios.get(`/api/quizzes/${id}`);
        return response.data;
    },

    // Create a new quiz
    createQuiz: async (quiz: Omit<QuizType, '_id'>) => {
        const response = await axios.post(`/api/quizzes`, quiz);
        return response.data;
    },

    // Update a quiz
    updateQuiz: async (id: string, quiz: Partial<QuizType>) => {
        const response = await axios.patch(`/api/quizzes/${id}`, quiz);
        return response.data;
    },

    // Delete a quiz
    deleteQuiz: async (id: string) => {
        const response = await axios.delete(`/api/quizzes/${id}`);
        return response.data;
    }
};

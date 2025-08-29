import type { UserType } from "../utils/types";


export const userApi = {
    // Get all user
    login: async () => {
        // const response = await axios.get(`/api/auth/login`);
        const response :UserType = {
            id:"7",
            username:"Batman",
            avatar:"https://i.pinimg.com/736x/e0/89/07/e089076d1d0467b110c8de292c5c5637.jpg"
        };
        return response;
    },

    logout: async () => {
        // const response = await axios.get(`/api/auth/logout`);
        const response = null;
        return response;
    },

    
};

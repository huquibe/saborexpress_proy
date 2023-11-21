import { getMeapi } from "../api/user";


export function useUser() {
  const getMe = async (token) => {
    try {
        const response = await getMeapi(token);
        return response;
    } catch (error) {
        throw error;
    }
    };
     
    return {
        getMe,
    };
}
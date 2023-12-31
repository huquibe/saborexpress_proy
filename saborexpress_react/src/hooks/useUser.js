import { useState } from "react";
import { getMeApi } from "../api/user";
import { useAuth } from "./useAuth";

export function useUser() {
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);
const[users, setUser] = useState(null);
const {auth} = useAuth();

  
    
  const getMe = async (token) => {
    try {
        const response = await getMeApi(token);
        return response;
    } catch (error) {
        throw error;
    }
    };

    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await getMeApi(auth.token);
            setLoading(false);
            setUser(response);
        } catch (error) {
            setLoading(false)
            setError(error);
        }
    }
     
    return {
        loading,
        error, 
        users,
        getMe,
        getUsers,
    };
} 
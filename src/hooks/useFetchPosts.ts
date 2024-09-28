import axios from "axios"
import { useEffect, useState } from "react";
import { Post } from "../types/interfaces";
import { usePostStore } from "../store/usePostStore";



export const useFetchPosts = () => {
    const { setPosts } = usePostStore(); 
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<Post[]>(`API_KEY/posts`);
                setPosts(response.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() =>{
                    setIsLoading(false);
                },500)
                
            }
        };

        fetchData();
    }, [setPosts]); 

    return { isLoading };
};
  

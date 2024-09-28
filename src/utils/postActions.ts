import toast from "react-hot-toast";
import { usePostStore } from "../store/usePostStore";
import axios from "axios";

export const PostActions = () => {
    const { posts,setPosts } = usePostStore();

    // Функция добавления поста
    const addPost = async (postTitle: string, postDescription: string) => {
        if (!postTitle || !postDescription) {
            toast.error('Поля не могут быть пустыми!');
            return;
        }
        try {
            const response = await axios.post('https://59ffa7b8f91940b1.mokky.dev/posts', 
            { title: postTitle, description: postDescription });
            setPosts([...posts, response.data]); 
            toast.success('Пост успешно создан!');
        } catch (error) {
           
            toast.error(`Ошибка создания поста! ${error}`);
        }
    };

    // Функция удаления поста
    const removePost = async (id: number) => {
        try {
            await axios.delete(`https://59ffa7b8f91940b1.mokky.dev/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id)); // Удаляем пост с указанным id
            toast.success('Пост успешно удалён!');
        } catch (error) {
            toast.error(`Ошибка удаления поста! ${error}`);
            console.log(error)
        }
    };

    return { addPost, removePost };
};
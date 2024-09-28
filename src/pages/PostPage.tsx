import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types/interfaces';

const PostPage = () => {

    const params = useParams<string>();
    const [post,setPost] = useState<Post>();
    const fetchPost = async(id: string | undefined) =>{
       
        try {
            const response = await axios.get(`https://59ffa7b8f91940b1.mokky.dev/posts/${id}`);
            console.log(response.data)
            setPost(response.data);
        } catch (error) {
            console.log('Произошла ошибка запроса на сервер!', error);
            
        }
    }
    useEffect(() =>{
        fetchPost(params.id)
        setTimeout(() =>{
            console.log(post);
        }, 3000)
    },[]);
    return (
        <div className='PostPage'>
            <h1>Страница поста {params.id}</h1>
            <p>{post?.title}</p>
            <p>{post?.description}</p>
        </div>
    );
}

export default PostPage;

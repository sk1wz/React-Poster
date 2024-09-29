import React from 'react';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

interface Props{
    postTitle: string;
    setPostTitle: (value: string) => void;
    postDescription: string;
    setPostDescription: (value: string) => void;
    addPost: () => void;
    setOpen: (value: boolean) => void;
  
}
const PostForm = (props: Props) => {
    return (
        <div className='post__form'>
            <h1>Добавление постов</h1>
            <Input placeholder='Введите название поста' value={props.postTitle} setValue={props.setPostTitle} />
            <Input placeholder='Введите описание поста' value={props.postDescription} setValue={props.setPostDescription} />
            <Button onClick={props.addPost}>Добавить пост</Button>
            <Button onClick={() => props.setOpen(false)}>Закрыть</Button> 
        </div>
    );
}

export default PostForm;

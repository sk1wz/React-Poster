import React, { memo } from 'react';
import PostItem from '../PostItem/PostItem';
import Select from '../ui/Select/Select';
import Input from '../ui/Input/Input';
import { useSearchStore } from '../../store/useSearchStore';


interface Post{
    id: number;
    title: string;
    description: string;
}

interface Props{
    posts: Post[];
    removePost: (id: number) => void;
    selectedSort: string;
    sortedPosts: (sort: string) => void;
    setOpen: (e: boolean) => void;
    isLoading: boolean;
}

const PostList = (props: Props) => {
    const { value, setValue } = useSearchStore();
    return (
        <div className='post__list'>

            <div className="post__list__info">
                <h1>Список постов</h1>
    
                <div className="post__list__info__right">
                    <Input placeholder='Введите для поиска' value={value} setValue={setValue}/>
                    <button onClick={() => props.setOpen(true)}>Добавить пост</button>
                    <Select defaultValue='Сортировка' options={[
                    {value: 'title', name: 'Сортировка по названию'},
                    {value:'body',name: 'Сортировка по описанию'}]}
                    value={props.selectedSort}
                    onChange={props.sortedPosts}
                    />
                </div>
                
            </div>

            <div className="post__list__items">
            {props.isLoading ? (
                <h1>Идёт загрузка постов</h1>   
            ):(
                props.posts.length ? (
                    props.posts.map((post: any) => (
                        <PostItem key={post.id} id={post.id} title={post.title} description={post.description} remove={props.removePost}/>
                    ))
                ) : (
                    <h2>Посты не найдены</h2>
                )
            )}
            
            </div>
            
            
        </div>
    );
}

export default memo(PostList);

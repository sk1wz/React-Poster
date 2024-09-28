import React from 'react';
import PostList from '../components/PostList/PostList';
import { Post } from '../types/interfaces';

interface Props{
    posts: Post[];
    removePost: (id: number) => void;
    selectedSort: string;
    sortedPosts: (sort: string) => void;
    setOpen: (e: boolean) => void;
    isLoading: boolean;
}

const HomePage = (props: Props) => {
    return (
        <div className='HomePage'>
            <PostList posts={props.posts} 
            removePost={props.removePost} 
            selectedSort={props.selectedSort} 
            sortedPosts={props.sortedPosts} 
            setOpen={props.setOpen} 
            isLoading={props.isLoading}
            />
        </div>
    );
}

export default HomePage;

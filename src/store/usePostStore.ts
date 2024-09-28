// Хранилище постов
import { create } from 'zustand';
import { Post } from '../types/interfaces';

interface PostState {
    posts: Post[];
    setPosts: (newPosts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    setPosts: (newPosts: Post[]) => set(() => ({ posts: newPosts })),
}));
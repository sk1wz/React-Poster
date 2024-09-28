// Хранилище для поиска
import { create } from 'zustand';
import { Post } from '../types/interfaces';

interface SearchState {
    value: string;
    setValue: (e: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    value: '',
    setValue: (newValue: string) => set(() => ({ value: newValue})),
}));
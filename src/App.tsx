import React, { useCallback, useState } from 'react';
import Modal from './components/Modal/Modal';
import PostForm from './components/PostForm/PostForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import { usePostStore } from './store/usePostStore';
import { useFetchPosts } from './hooks/useFetchPosts';
import { PostActions } from './utils/postActions';
import { Toaster } from 'react-hot-toast';


function App() {
  const {isLoading} = useFetchPosts(); // Кастомный хук для получения постов
  const {posts, setPosts} = usePostStore(); // Хранилище постов
  const {addPost,removePost} = PostActions(); // Функции
  const [postTitle, setPostTitle] = useState<string>(""); // Заголовок поста для формы
  const [postDescription, setPostDescription] = useState<string>(""); // Описание поста для формы
  const [open,setOpen] = useState<boolean>(false); // Состояние модального окна
  const [selectedSort,setSelectedSort] = useState<string>(''); // Метод сортировки

  // Добавление
  const handleAddPost = useCallback(() =>{
    addPost(postTitle,postDescription);
    setPostTitle(""); 
    setPostDescription("");
    setOpen(false);
  }, [addPost]);

  // Удаление
  const handleRemovePost = useCallback((id: number) =>{
    removePost(id)
  },[removePost]);

  // Сортировка
  const sortedPosts = (sort: string) => {
    setSelectedSort(sort);
    const sortedArray = [...posts].sort((a: any, b: any) => {
      if (sort === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sort === 'body') {
        return a.description.localeCompare(b.description);
      }
      return false; 
    });
    setPosts(sortedArray);
  };

  return (
    <div className="App">
        {/* Уведомления */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 1000,
            style: {
              background: '#404040',
              color: '#fff',
            }
          }}
        />

        {/* Модальное окно */}
        <Modal open={open} setOpen={setOpen}>
          <PostForm 
          postTitle={postTitle} 
          setPostTitle={setPostTitle} 
          postDescription={postDescription} 
          setPostDescription={setPostDescription} 
          addPost={handleAddPost} 
          setOpen={setOpen} 
          />
        </Modal>
      <div className="container">
        {/* Приложение */}
        <Routes>
          <Route path="/*" 
          element={<HomePage 
          posts={posts} 
          removePost={handleRemovePost} 
          selectedSort={selectedSort} 
          sortedPosts={sortedPosts} 
          setOpen={setOpen}
          isLoading={isLoading} />} 
          />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';

import { API_SERVICE } from '../services/api';

export const PostsProvider = React.createContext(null);

function PostsProviderComponent({ children }) {
  const [postsList, setPostsList] = useState([]);

  const loadPostsData = async () => {
    const data = await API_SERVICE.getPostsListAsync({ start: 2, limit: 3 });
    setPostsList(data);
  };

  useEffect(() => {
    loadPostsData();
  }, []);

  const onPostAdd = (newPost) => {
    const newList = [...postsList, newPost];
    setPostsList(newList);
  };

  return (
    <PostsProvider.Provider value={{ postsList, setPostsList, onPostAdd }}>
      {children}
    </PostsProvider.Provider>
  );
}

export default PostsProviderComponent;

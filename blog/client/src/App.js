import React from 'react';
import './App.css';

import PostCreate from './PostCreate';
import PostList from './PostList';




function App() {
  return (
    <div className="container">
        <h1>Post Create</h1>
        <PostCreate/>
        <hr/>
        <h1>Posts</h1>
        <PostList/>
    </div>
  );
}

export default App;

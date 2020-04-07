import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import Comments from './component/Comments';

function App() {
  return (
    <Fragment>
      <Post></Post>
      <Comments></Comments>
    </Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

function App() {
  return (
    <React.Fragment>
      <MyName name="리액트" />
      <Counter />
    </React.Fragment>
    
  );
}

export default App;

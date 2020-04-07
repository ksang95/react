import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';
import Counter from './components/Counter';

const AppProvider=({contexts,children})=>contexts.reduce(
  (prev,context)=>React.createElement(context,{
    children:prev
  }), //이번 context로 element생성하는데 이전 배열값을 props인 children으로 보내겠다->하위 요소로
  children //초기값은 AppProvider의 하위 요소
);

function App() {
  return (
    <AppProvider contexts={[SampleProvider, AnotherProvider]}>
    <div className="panes">
      <LeftPane />
      <RightPane />
    </div>
    <Counter></Counter>
    </AppProvider>
  );
}

export default App;

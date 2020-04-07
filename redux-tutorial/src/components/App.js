import CounterContainer from 'containers/CounterContainer';
import TodosContainer from 'containers/TodosContainer';
import React, { Component } from 'react';
import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<TodosContainer />}
      />
    );
  }
}

export default App;

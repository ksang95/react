import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component{
  
  id=3;

  state={
    input:'',
    todos:[
      {id:0, text:' 리액트 소개', checked:false, color:'#343a40'},
      {id:1, text:' 리액트 소개', checked:true, color:'#343a40'},
      {id:2, text:' 리액트 소개', checked:false, color:'#343a40'}
    ],
    colors:[
      {id:0, color:'#343a40', selected:true}, 
      {id:1, color:'#f03e3e', selected:false}, 
      {id:2, color:'#12b886', selected:false}, 
      {id:3, color:'#228ae6', selected:false}
    ],
    selection:'#343a40'
  }

  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    });
  }

  handleCreate=()=>{
    const {input,todos,selection}=this.state;
    this.setState({
      input:'',
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false,
        color:selection
      })
    });
  }

  handleKeyPress=(e)=>{
      if(e.key==='Enter'){
        this.handleCreate();
      }
  }

  handleToggle=(id)=>{
    const {todos}=this.state;
    const index=todos.findIndex(todo=>todo.id===id);
    const selected=todos[index];
    const nextTodos=[...todos];
    nextTodos[index]={
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos:nextTodos
    });
  }

  handleRemove=(id)=>{
    const {todos}=this.state;
    this.setState({
      todos: todos.filter(todo=>todo.id!==id)
    });
  }

  handleClick=(id)=>{
    const {colors}=this.state;
    const index=colors.findIndex((c)=>c.id===id);
    const select=colors[index];
    const nextColors=colors.map((c)=>({
      ...c,
      selected:false
    }));
    nextColors[index]={
      ...select,
      selected:true
    };
    this.setState({
      colors:nextColors,
      selection:nextColors[index].color
    });
  }

  render(){
    const {input, todos, colors, selection}=this.state;
    const {handleChange,handleCreate,handleKeyPress, handleToggle, handleRemove, handleClick}=this;

    return (
      <TodoListTemplate palette={<Palette colors={colors} onClick={handleClick}/>} form={
      <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} selection={selection}/>
      }>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} selection={selection}/>
      </TodoListTemplate>
    );
  }
}

export default App;

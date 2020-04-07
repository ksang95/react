import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState){ //해당 list(todos)가 업데이트 해야 하는가? -> todos가 바뀔때만
        return this.props.todos!==nextProps.todos;
    }

    render(){
        const {todos,onToggle,onRemove}=this.props;

        const todoList=todos.map(({id,text,checked,color})=>(
            <TodoItem id={id} text={text} color={color} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id}/>
        ));

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;
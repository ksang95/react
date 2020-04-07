// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from "react";
import Todos from "components/Todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "store/modules/todo";
import { TodoActions } from 'store/actionCreators';

class TodosContainer extends Component {

    handleChange = (e) => {
        return TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const { input } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }

    handleRemove = (id) => {
        return TodoActions.remove(id);
    }

    handleToggle = (id) => {
        return TodoActions.toggle(id);
    }

    render() {
        const { handleInsert, handleToggle, handleRemove, handleChange } = this;
        const { input, todos } = this.props;

        return <Todos input={input} todos={todos} onInsert={handleInsert} onToggle={handleToggle} onRemove={handleRemove} onChange={handleChange}></Todos>
    }
}

export default connect(
    ({ todo }) => ({ input: todo.input, todos: todo.todos }),
)(TodosContainer);
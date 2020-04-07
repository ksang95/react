import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps,nextState){ //보여지고 있는 해당 item이 업데이트 해야하는가? -> 해당 checked 값 바뀔때만
        return this.props.checked!==nextProps.checked;
    }

    render(){
        const {text, checked, id, onToggle, onRemove, color}=this.props;
        console.log(id);
        return (
            <div className="todo-item" onClick={()=>onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation(); // onToggle이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color:color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }
}

export default TodoItem;
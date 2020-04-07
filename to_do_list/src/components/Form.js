import React from 'react';
import './Form.css';

const Form=({value, onChange, onCreate, onKeyPress, selection})=>{
    const style={color:selection};
    return (
        <div className="form">
            <input value={value} color={selection} onChange={onChange} onKeyPress={onKeyPress} style={style}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
}

export default Form;
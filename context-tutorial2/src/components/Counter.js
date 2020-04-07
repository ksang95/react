import React from 'react';
import { useAnother } from '../contexts/another';


const Counter=({number,increment})=>{
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>더하기</button>
        </div>
    )
}

//HoC 직접 작성
//export default useAnother(Counter);

//HoC 작성하는 함수 이용
export default useAnother(
    ({state,actions})=>({
    number:state.number,
    increment:actions.increment
}) //인자 mapContextToProps 넣기
)(Counter); //인자 WrappedComponent 넣기
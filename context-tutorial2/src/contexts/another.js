import React, {Component,createContext} from 'react';
import createUseConsumer from '../lib/createUseConsumer';

const Context=createContext();

const{
    Provider,
    Consumer: AnotherConsumer
}=Context;

class AnotherProvider extends Component{
    state={
        number:1
    }

    actions={
        increment: ()=>{
            this.setState(
                ({number})=>({number:number+1})
            );
        }
    }

    render(){
        const {state,actions}=this;
        const value={state,actions};
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

//HoC 직접 작성
/* 
function useAnother(WrappedComponent){
    return function UseAnother(props){
        return(
            <AnotherConsumer>
                {
                    ({state,actions})=>(
                        <WrappedComponent number={state.number} increment={actions.increment}/>
                    )
                }
            </AnotherConsumer>
        )
    }
}
*/

//HoC 작성하는 함수 이용
const useAnother=createUseConsumer(AnotherConsumer); //인자 Consumer 넣기

export{
    AnotherProvider,
    AnotherConsumer,
    useAnother
}
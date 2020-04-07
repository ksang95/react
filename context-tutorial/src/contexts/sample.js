import React, {Component, createContext} from 'react';

const Context = createContext(); //Context 만들기

//Provider, Consumer : Context를 이용하기 위해 필요한 컴포넌트
//Consumer를 SampleConsumer라고 부르도록 설정함
const {Provider, Consumer: SampleConsumer}=Context;

class SampleProvider extends Component {
    state={
        value: '기본값입니다'
    }

    actions={
        setValue: (value)=> {
            this.setState({value});
        }
    }

    render(){
        const {state,actions}=this;
        //Provider 내에서 사용할 값은, "value"라고 부른다.
        const value={state,actions};
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

//HoC
function useSample(WrappedComponent){
    return function UseSample(props){
        return(
            <SampleConsumer>
                {
                    ({state,actions})=>(
                        <WrappedComponent value={state.value} setValue={actions.setValue}/>
                    )
                }
            </SampleConsumer>
        )
    }
}

//여러개의 Context 를 사용 할 때 이름이 겹치지 않고 쉽게 다루기 위해서 Provider 와 Consumer 앞에 prefix 를 설정해주었습니다
export{
    SampleProvider,
    SampleConsumer,
    useSample
};
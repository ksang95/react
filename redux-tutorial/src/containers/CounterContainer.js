// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';
import { bindActionCreators } from 'redux';
import { CounterActions } from 'store/actionCreators';

class CounterContainer extends Component {
    handleIncrement = () => {
        CounterActions.increment();
    }

    handleDecrement = () => {
        CounterActions.decrement();
    }

    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;

        return (
            <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} number={number} />
        );
    }
}

// //props 값으로 넣어 줄 상태를 정의해줍니다.
// const mapStateToProps = (state) => ({
//     number: state.counter.number
// });

// //props 값으로 넣어 줄 액션 함수들을 정의해줍니다.
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(counterActions.increment()),
//     decrement: () => dispatch(counterActions.decrement())
// });

// //컴포넌트를 리덕스와 연동할 떄에는 connect를 사용합니다.
// //connect()는 컴포넌트에 props를 넣어주는 함수를 반환합니다.
// //반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

//위 코드를 간소화
// export default connect(
//     (state) => ({
//         number: state.counter.number
//     }),
//     (dispatch) => ({ CounterActions: bindActionCreators(counterActions, dispatch) })
//     //여러 모듈의 액션 생성 함수 참조하게 될 때는 bindActionCreators 결과물을 각 객체로 만들어 관리
// )(CounterContainer);

export default connect(
    (state) => ({
        number: state.counter.number
    })
)(CounterContainer);
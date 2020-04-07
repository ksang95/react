// 카운터 관련 상태 로직

import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태 정의
const initialState = {
    number: 0
};

// 리듀서 만들어서 내보냅니다.
// export default function reducer(state = initialState, action) {
//     // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
//     switch (action.type) {
//         case INCREMENT:
//             return { number: state.number + 1 };
//         case DECREMENT:
//             return { number: state.number - 1 };
//         default:
//             return state;
//     }
// }
// handleActions의 첫 번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고,
// 두 번째 파라미터는 초기 상태입니다.
export default handleActions({
    [INCREMENT]: (state, actions) => {
        return { number: state.number + 1 }
    },
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);


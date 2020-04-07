import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import { pender } from 'redux-pender';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

//redux-thunk 사용
// export const getPost = (postId) => dispatch => {
//     //먼저 요청이 시작했다는 것을 알린다
//     dispatch({ type: GET_POST_PENDING });

//     //요청을 시작한다.
//     //여기서 만든 promise를 return 해줘야, 나중에 컴포넌트에서 호출할 때 getPost().then()을 할 수 있다.
//     return getPostAPI(postId).then(
//         (response) => {
//             //요청이 성공했을 경우, 서버 응답내용을 payload로 설정하여 GET_POST_SUCCESS 액션을 디스패치
//             dispatch({
//                 type: GET_POST_SUCCESS,
//                 payload: response
//             });
//         }
//     ).catch(error => {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: error
//         });
//         throw error;
//     });
// }

//redux-promise-middleware 사용
// export const getPost = (postId) => ({
//     type: GET_POST,
//     payload: getPostAPI(postId)
// });


//redux-pender 사용x
// const initialState = {
//     pending: false,
//     error: false,
//     data: {
//         title: '',
//         body: ''
//     }
// }
// export default handleActions({
//     [GET_POST_PENDING]: (state, aciton) => {
//         return {
//             ...state,
//             pending: true,
//             error: false
//         };
//     },
//     [GET_POST_SUCCESS]: (state, action) => {
//         const { title, body } = action.payload.data;
//         return {
//             ...state,
//             pending: false,
//             data: {
//                 title, body
//             }
//         };
//     },
//     [GET_POST_FAILURE]: (state, action) => {
//         return {
//             ...state,
//             pending: false,
//             error: true
//         };
//     }
// }, initialState);




//redux-pender 사용
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST, //type이 주어지면 이 type에 접미사를 붙인 액션핸들러들이 담긴 객체 생성
        /*
           요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 과 onFailure 를 추가해주면됩니다.
           onPending: (state, action) => state,
           onFailure: (state, action) => state
       */
        onSuccess: (state, action) => {//성공했을 때 할 추가 작업 없으면 생략 가능
            const { title, body } = action.payload.data;
            return {
                data: {
                    title, body
                }
            }
        }
    })
}, initialState);


import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// import { createPromise } from 'redux-promise-middleware';
import penderMiddleWare from 'redux-pender';

//직접 만든 로거 사용
// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다.
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
// const store = createStore(modules, applyMiddleware(loggerMiddleware));

//redux-logger 사용
const logger = createLogger();

//redux-promise-middleware 사용
// const customizedPromiseMiddleware = createPromise({
//     promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
// });
// const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware));

//redux-pender 사용
const store = createStore(modules, applyMiddleware(logger, ReduxThunk, penderMiddleWare()));

export default store;
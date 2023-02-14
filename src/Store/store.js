import {  configureStore } from '@reduxjs/toolkit';
import authenticReducer from './authentic';
// import { createStore} from 'redux';
import countReduser  from './counter';

// const counterReduser = (state = initialCountState, acttion) => {
//     if (acttion.type === 'increment') {
//         return {
//             isTOggle: state.isTOggle,
//             counter: state.counter + 1
//         }
//     }
//     if (acttion.type === 'decrement') {
//         return {
//             isTOggle: state.isTOggle,
//             counter: state.counter - 1
//         }
//     }
//     if (acttion.type === 'incrementByAction') {
//         return {
//             isTOggle: state.isTOggle,
//             counter: state.counter + acttion.amount
//         }
//     }
//     if (acttion.type === 'toggleButton') {
//         return {
//             isTOggle: !state.isTOggle,
//             counter: state.counter
//         }
//     }
//     return state
// }
// const store = createStore(counterReduser);

const store = configureStore({
    reducer: { counter: countReduser, authentication : authenticReducer   }
});


export default store;
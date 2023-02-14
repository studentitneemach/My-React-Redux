import { createSlice } from '@reduxjs/toolkit';
const initialCountState = { counter: 0, isTOggle: true };

 const countSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementByAction(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleButton(state) {
            state.isTOggle = !state.isTOggle
        }
    }
});
export const counterAction = countSlice.actions;
export default countSlice.reducer;
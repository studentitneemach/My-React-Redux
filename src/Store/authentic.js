import { createSlice } from '@reduxjs/toolkit';
const initialAuthentic = {  
    isAuthenticed : false
 };
 const authenticSlice = createSlice ({
    name : 'authentication',
    initialState: initialAuthentic,
    reducers:{
        login(state){
            state.isAuthenticed = true;
        },
        logout(state){
            state.isAuthenticed = false;
        }
    }
})

export const authenticActions = authenticSlice.actions; 
export default authenticSlice.reducer;
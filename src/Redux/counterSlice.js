import { createSlice } from "@reduxjs/toolkit";

let initialState = {counter:0 , userName:' '};
let counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        increase:()=>{
            console.log("hoooo");
        },
        decrease:()=>{
            console.log("hoooo");
        },
    }
});
export let counterReducer = counterSlice.reducer;
export let {increase , decrease} = counterSlice.actions;
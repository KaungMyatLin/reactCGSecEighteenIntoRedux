import { createSlice } from '@reduxjs/toolkit';

const initiateCounterState = {counterState: 0, showCounterOrNState: true};
const counterSlice = createSlice({
    name: 'counterASliceCategoryN',
    initialState: initiateCounterState,
    reducers: {
        increHReducer:(state)=>{
            // here no need to worry about changing immutable way,
            // react-toolkit internally auto keep immutable for us.
            state.counterState++;
        },
        increaseHReducer:(state, action)=>{
            state.counterState=state.counterState+action.payload;
        },
        decreHReducer:(state)=>{
            state.counterState--;
        },
        toggleCounterHReducer:(state)=>{
            state.showCounterOrNState= !state.showCounterOrNState;
        }
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
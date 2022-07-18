import { createSlice, configureStore } from '@reduxjs/toolkit';
//createSlice is even more powerful than createReducer.

const initiateCounterState = {counterState: 0, showCounterOrNState: true};
const counterSlice = createSlice({
    name: 'counterASliceCategoryN',
    initialState: initiateCounterState,
    reducers: {
        increHReducer(state){
            // here no need to worry about changing immutable way,
            // react-toolkit internally auto keep immutable for us.
            state.counterState++;
        },
        increaseHReducer(state, action){
            state.counterState=state.counterState + action.payload;
        },
        decreHReducer(state){
            state.counterState--;
        },
        toggleCounterHReducer(state){
            state.showCounterOrNState= !state.showCounterOrNState;
        }
    }
})
const initialAuthState = {
    isAuthed:false
}
const authSlice = createSlice({
    name: 'AuthASliceCategoryN',
    initialState: initialAuthState,
    reducers: {
        login:(state)=>{state.isAuthed=true},
        logout:(state)=>{state.isAuthed=false}
    }
})
const createRtlKitconfigStore = configureStore({
    reducer: {counterSlceRdr: counterSlice.reducer, authSlceRdr: authSlice.reducer}
    // not reducers key and you can have many reducers from many slices into one big reducer key.
})
// slice.actions has an object full of keys identifiers with reducer names in actions for each reducer.
// when an action method called, it will create an action object of this shape; therefore they're called actionCreator.
// developers dont have to worry about creating action object for each action, that is for each reducer, on our own.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default createRtlKitconfigStore;
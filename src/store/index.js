import { createStore } from 'redux';
//createSlice is even more powerful than createReducer.

const initiateState = {counter: 0, showCounter: true};
const counterReducer = (state = initiateState, action) => {
    if (action.type === 'incre') {
        return {
            counter    : state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'increase') {
        return {
            counter    : state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decre') {
        return {
            counter    : state.counter -1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter    : state.counter,
        }
    }
    return state;
}
const createReduxStore = createStore(counterReducer)
export default createReduxStore;
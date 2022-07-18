import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterSlceRdr.counterState );
  const showCounterOrN = useSelector(state => state.counterSlceRdr.showCounterOrNState );
  const increHandler = () => {
    dispatch(counterActions.increHReducer())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increaseHReducer(10)) //auto generated action obj {type:id_generated, payload:10}
  }
  const decreHandler = () => {
    dispatch(counterActions.decreHReducer())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHReducer())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounterOrN && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increHandler}>Inc</button>
        <button onClick={increaseHandler}>Inc by 10</button>
        <button onClick={decreHandler}>dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

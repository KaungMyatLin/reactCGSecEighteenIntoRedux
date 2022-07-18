import { useSelector, Connect, useDispatch } from 'react-redux';
import { useStore } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // below useSelector auto manage; auto getting subscription and auto removal subcription.
  const counter = useSelector(state => state.counter);
  const showCounterOrN = useSelector(state => state.showCounter);
  const increHandler = () => {
    dispatch({type: 'incre'})
  }
  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 10})
  }
  const decreHandler = () => {
    dispatch({type: 'decre'})
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterOrN && <div className={classes.value}>{counter}</div>}
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

import {Component} from 'react'
import { connect } from 'react-redux';
//connect can be used in both cb and function-based components.
import classes from './Counter.module.css';

class Counter extends Component {
  increHandler() {
    this.props.incre();
  }
  decreHandler() {
    this.props.decre();
  }
  toggleCounterHandler() {};
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{ this.props.counter}</div>
        <div>
          <button onClick={this.increHandler.bind(this)}>Inc</button>
          <button onClick={this.decreHandler.bind(this)}>dec</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
      counter: state.counter // mapping props, obj.key, from state received from redux.
  }
}
const mapDispatchToProps = dispatch => {
  return {
    incre: () => dispatch({type: 'incre'}),
    decre: () => dispatch({type: 'decre'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

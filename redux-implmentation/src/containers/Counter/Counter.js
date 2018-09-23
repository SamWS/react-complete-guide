import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {add, decrement, increment, removeResult, storeResult, subtract} from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.result.map((result, key) => (
                    <li onClick={() => this.props.onRemoveResult(result.id)} key={key}>{result.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
  }
    
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    result: state.res.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onRemoveResult: (elId) => dispatch(removeResult(elId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

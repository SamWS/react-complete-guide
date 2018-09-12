import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

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
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onRemoveResult: (elId) => dispatch({ type: actionTypes.REMOVE_RESULT, resultId: elId })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

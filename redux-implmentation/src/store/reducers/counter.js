import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      console.log(action);
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    default:
      return state;
  }
};

export default counterReducer;

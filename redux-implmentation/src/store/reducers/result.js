import * as actionTypes from '../actions';

const initialState = {
  result: []
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ value: action.result, id: new Date() })
      }
    case actionTypes.REMOVE_RESULT:
      const updatedArray = state.result.filter((result) => (
        result.id !== action.resultId
      ))
      return {
        ...state,
        result: updatedArray
      }
    default:
      return state;
  }
};

export default resultReducer;
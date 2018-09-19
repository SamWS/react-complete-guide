import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const combinedReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[middleware] Dispatching", action);
      const result = next(action);
      console.log("[middleware] result", result);
      console.log("[middleware] next state", store.getState());
      return result;
    }
  }
};

const store = createStore(combinedReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

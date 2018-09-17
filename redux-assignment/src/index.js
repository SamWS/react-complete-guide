import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      const newPerson = {
          id: Math.random(), // not really unique but good enough here!
          name: action.payload.name,
          age: action.payload.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }  
    case 'DELETE_PERSON':
      return { 
        ...state,
        persons: state.persons.filter(person => person.id !== action.id)
      }
    default:
      return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

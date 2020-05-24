import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';

import App from './App';

import './index.css';

const initialState = {
  cart: [],
  products: [],
};

const store = createStore(appReducer, initialState, applyMiddleware(
  logger,
  thunk,
)); 



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
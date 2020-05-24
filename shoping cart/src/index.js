import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers'

const store = createStore(reducer); 
const data = fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')

var obj;

fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))

ReactDOM.render(<App />, document.getElementById('root'));




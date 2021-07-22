import React from 'react';
import ReactDOM from 'react-dom';

// Components
import FisrtApp from './FirstApp';
//import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

// Components
ReactDOM.render(<FisrtApp saludo="PropSaludo" />, divRoot);
// ReactDOM.render(<CounterApp value={ 1 } />, divRoot);
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import CounterApp from './CounterApp';
//import FisrtApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');

// Components
//ReactDOM.render(<FisrtApp saludo="PropSaludo" />, divRoot);
ReactDOM.render(<CounterApp value={ 1 } />, divRoot);
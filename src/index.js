import React from 'react';
import ReactDOM from 'react-dom';

// Components
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

// Components
//ReactDOM.render(<FirstApp saludo="PropSaludo" />, divRoot);
ReactDOM.render(<CounterApp  />, divRoot);
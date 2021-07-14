import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// Functional Componente
const CounterApp = ({ value = 0 }) => {
    const [ counter, setCounter ] = useState(value);

    // handAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2> { counter } </h2>

            <button onClick={ () => setCounter(counter - 1) }>-1</button>
            <button onClick={ () => setCounter(value) }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </Fragment>
    );
}

// Validaciones de Props.
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
// Los componentes existen dos tipos por clases y por funciones.
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Functional Components
const FisrtApp = ({ saludo, subtitle }) => {
    const grettings = 'Hola, soy Goku';
    const objectPerson = {
        name: 'Demo',
        age: 123
    };

    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <h1>{ grettings }</h1>
            <pre>{ JSON.stringify(objectPerson, null, 3) }</pre>
            <h1>Hola Mundo</h1>
            <h1>{ subtitle }</h1>
        </Fragment>
    );
}

// Validaciones de los Props.
FisrtApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Valores por defecto a los Props.
FisrtApp.defaultProps = {
    subtitle: 'Subtitle'
}

export default FisrtApp;
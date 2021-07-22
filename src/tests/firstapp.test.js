import React from 'react';
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import FisrtApp from "../FirstApp";

describe('First App Test', () => {
    test('See message Hola, soy Goku', () => {
        const gretting = 'Hola, soy Goku';

        const { getByText } = render( <FisrtApp saludo={ gretting } /> );
        expect( getByText( gretting ) ).toBeInTheDocument();

    });    
});

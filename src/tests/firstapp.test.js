import React from 'react';
import { shallow } from 'enzyme';

import FirstApp from "../FirstApp";
//import { render } from "@testing-library/react";
//import '@testing-library/jest-dom'

describe('First App Test', () => {
    // test('See message Hola, soy Goku', () => {
    //     const gretting = 'Hola, soy Goku';
    //     const { getByText } = render( <FirstApp saludo={ gretting } /> );
    //     expect( getByText( gretting ) ).toBeInTheDocument();
    // });    

    test('Show component <FirstApp /> successful', () => {
        const wrapper = shallow(<FirstApp />)
    })
    



});

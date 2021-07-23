import React from 'react';
import { shallow } from 'enzyme';

import FirstApp from "../FirstApp";

// Ayuda de Expect y autocompletación.
import '@testing-library/jest-dom'

//import { render } from "@testing-library/react";

describe('First App Test', () => {
    // test('See message Hola, soy Goku', () => {
    //     const gretting = 'Hola, soy Goku';
    //     const { getByText } = render( <FirstApp saludo={ gretting } /> );
    //     expect( getByText( gretting ) ).toBeInTheDocument();
    // });    

    test('Show component <FirstApp /> successful', () => {
        const gretting = 'Hola, soy Goku';
        const wrapper = shallow(<FirstApp saludo={ gretting } />);

        // toMatchSnapshot: Fotografia de como se encuentra el componente renderizado.
        expect(wrapper).toMatchSnapshot();
    });
});

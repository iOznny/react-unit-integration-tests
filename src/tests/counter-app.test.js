import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp'

describe('Test Counter App', () => {
    let wrapper = shallow(<CounterApp />);

    // Inicializar antes que todas con beforeEach()
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Show <CounterApp /> successful', () => {
        expect(wrapper).toMatchSnapshot();
    }); 

    // Mostrar valor por defecto de 100
    test('Show value 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);        

        const h2 = wrapper.find('h2').text().trim();        
        expect(h2).toBe('100');
    });   
    
    // Checking decrement button -1
    test('Decrement Counter -1', () => {
        //const btn1 = wrapper.find('button').at(0);
        //console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click');

        const h2 = wrapper.find('h2').text().trim();        
        expect(h2).toBe('9');
    });

    // Checking increment button +1
    test('Increment Counter +1', () => {
        //const btn1 = wrapper.find('button').at(0);
        //console.log(btn1.html());

        wrapper.find('button').at(2).simulate('click');

        const h2 = wrapper.find('h2').text().trim();        
        expect(h2).toBe('11');
    });

    // Checking reset button 10
    test('Set default value with button reset', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />);
        
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const h2 = wrapper.find('h2').text().trim();        
        
        expect(h2).toBe('105');
    });    
});
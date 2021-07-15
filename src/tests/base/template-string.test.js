import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Prueba Template String JS', () => {
    test('Prueba Method getSaludo', () => {
        const name = 'Demo';
        const gretting = getSaludo(name);

        expect(gretting).toBe('Hola ' + name);        
    });

    test('Prueba Method getSaludo sin Argumento', () => {
        const gretting = getSaludo();
        expect(gretting).toBe('Hola Carlos');  
    });
});

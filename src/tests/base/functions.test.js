import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba Functions JS', () => {
    test('getUser return Obj', () => {
        const userData = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // toEqual: Permite evaluar las mismas propiedades de los dos elementos (user y userData).
        expect(user).toEqual(userData);  
        
    });

    // getUsuarioActivo
    test('getUsuarioActivo return Obj', () => {
        const name = 'Name';
        const getUser = getUsuarioActivo(name);

        const user = {
            uid: 'ABC567',
            username: name
        };

        expect(getUser).toEqual(user);
    });
});
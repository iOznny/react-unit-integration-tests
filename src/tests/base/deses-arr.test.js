import { retornaArreglo } from "../../base/07-deses-arr";

describe('Prueba Desestructuración de Arrglo JS', () => {
    test('retornaArreglo return string and number', () => {
        const [words, numbers] = retornaArreglo();

        expect(words).toBe('ABC');
        expect(typeof words).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });     
});

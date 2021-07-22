import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Promises JS', () => {
    test('Return Heroe Async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    }); 

    test('Get error by Heroe not found ', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe'); 
            done();
        })
    });    
});

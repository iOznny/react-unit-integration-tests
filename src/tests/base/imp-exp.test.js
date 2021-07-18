import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba Imp Exp JS', () => {
    test('getHeroeById', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('getHeroeById undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);        
        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner by DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);   
        
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
    });
    
    test('getHeroesByOwner by length', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
       
    });
});
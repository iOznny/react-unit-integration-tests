import { getHeroeById } from "../../base/08-imp-exp";

describe('Prueba Imp Exp JS', () => {
    test('getHeroeById', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        console.log(heroe);


    });    
});

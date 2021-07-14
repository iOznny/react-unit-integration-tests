// Desestructuración o Asignación Desestructurante.
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const { age, key, name } = persona;
// console.log(name);
// console.log(age);
// console.log(key);

const usContext = ({ key, name, age, range = 'Capitán' }) => {
    // console.log( name, key, range );
    
    return {
        nameKey: key,
        years: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nameKey, years, latlng: { lat, lng } } = usContext(person);
console.log(nameKey, years);
console.log(lat, lng);
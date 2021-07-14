// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (name) => {
    return `Hola, ${ name }`;
}

const saludar3 = (name) => `Hola, ${ name }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = (name) => ({
    uid: 'ABC567',
    username: name
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
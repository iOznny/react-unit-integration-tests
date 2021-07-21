// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (name) => {
    return `Hola, ${ name }`;
}

const saludar3 = (name) => `Hola, ${ name }`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

// Tarea
export const getUsuarioActivo = (name) => ({
    uid: 'ABC567',
    username: name
});

const name = 'Fernando';
const lastname = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const fullname = `${ name } ${ lastname }`;
console.log(fullname);

function getSaludo(name) {
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${ getSaludo(name) } `);
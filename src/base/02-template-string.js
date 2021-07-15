const name = 'Fernando';
const lastname = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const fullname = `${ name } ${ lastname }`;
//console.log(fullname);

export function getSaludo(name = 'Carlos') {
    return 'Hola ' + name;
}

//console.log(`Este es un texto: ${ getSaludo(name) } `);
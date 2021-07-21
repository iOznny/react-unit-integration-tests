const name = 'Fernando';
const lastname = 'Herrera';

const fullname = `${ name } ${ lastname }`;

export function getSaludo(name = 'Carlos') {
    return 'Hola ' + name;
}
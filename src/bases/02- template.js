

const nombre = 'luis'
const apellido = 'rhenals'

const nombreCompleto = `${ nombre } ${ apellido }`

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`)
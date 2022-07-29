
//function saludar( xyz ){
  //  return `Hola ${ xyz }`
//}


// Funcion de flecha
// const saludar = ( xyz ) => {
//     return `Hola ${ xyz }`
// }

const saludar = ( nombre = 'luis' ) => `Hola ${ nombre }`

const nombre = 'Luis'

//console.log( saludar(nombre) )

const getUser = () => ({
  uid: 'ABC123',
  username: 'Luis123'
})

//console.log(getUser())

const heroes = [
  {
    id: 1,
    name: 'Batman'
  },
  {
    id: 2,
    name: 'Superman'
  }
]

//id: 1 (existe) // TRUE/FALSE
// 

//valida si existe el valor consultado
//const existe = heroes.some( (heroe) => heroe.id === 1);
//console.log( existe ) // devuelve true/false

//Consulta el valor consultado
//const heroe = heroes.find( (heroe) => heroe.id === 1);
//console.log( heroe ) // devuleve un arreglo

const { name } = heroes.find( ( heroes ) => heroes.id === 1 );
console.log( name )
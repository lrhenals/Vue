// Importar informacion desde otro archivo
// import { owners } from './data/heroes';

// const [ dc, marvel] = owners

// console.log( dc )
// console.log( marvel )

//importacion por defecto - trae el arreglo de 'heroes'
//import heroes from './data/heroes';
import superHeroes from '../data/heroes';

console.log(superHeroes)

//getHeroesById ( id )
//funciones flechas
//find

//funcion getHeroeById traciional de flecha q retorna un id
// const getHeroeById = (id) => {
//     return superHeroes.find(heroe => heroe.id === id)
// }

//funcion getHeroeById con flecha q retorna un id
export const getHeroeById = (id) => superHeroes.find(heroe => heroe.id === id)


//console.log( getHeroeById(2) ) //spiderman

//getHeroesByOwner 'DC', 'Marvel'
//[]

//funcion getHeroeById con flecha q retorna el owner
export const getHeroesByOwners = (owner) => superHeroes.filter(heroe => heroe.owner === owner)

//console.log( getHeroesByOwners('DC') ) //spiderman

// Para que lo anterior funcione se debetener las siguientes lienas en
// en index:

// import { getHeroeById, getHeroesByOwners } from './bases/08-imp-exp';

// console.log( getHeroeById(2) ) //spiderman

// console.log( getHeroesByOwners('DC') ) 
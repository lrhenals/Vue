const person = {
  name: 'tony', 
  age: 45,
  codeName: 'Ironman'
}

// Crear constantes definidas entre las llaves
// Las constantes sera extraidas por el objeto "person"
const { name, age, codeName, power = 'no tiene' } = person

/*onsole.log(name)
console.log(age)
console.log(codeName) 
console.log(power)*/

/*const createHero = ( { name, age, codeName, power } ) => {

  //const { name, age, codeName, power } = person

  return {
    id: 1112,
    name,
    age,
    codeName,
    power
  }


}*/

const createHero = ( { name, age, codeName, power } ) => 
({
    id: 1112,
    name,
    age,
    codeName,
    power
})



console.log( createHero( person ) )
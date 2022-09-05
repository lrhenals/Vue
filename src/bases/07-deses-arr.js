

const characters = ['Goku', 'Vegeta', 'Trunks', 'G oten']

//const goku = characters[0] 
//const trunks = characters[2] 

//desestructuraciond e arreglos
const [g, v, t, goten="no tiene valor"] = characters

// Si se requiere solo el tercer elemento se coloca solo las comas 
// separando los demas elementos del arreglo
//const [, , trunks] = characters


//
/*const returnArray = () => {
    return ['ABC', 123 ]
}*/

const returnArray = ([letters, numbers ]) => {
    return [letters, numbers]
}

const [ letters, numbers] = returnArray(['ABC', 123 ])

console.log(letters, numbers)
//
//console.log(goten)
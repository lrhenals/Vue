const arreglo = [1,2,3,4]
arreglo.push( 5 )

const arreglo2 = [ ...arreglo ] // operador spread
arreglo2.push( 6 )

// toma cada valor del arreglo y lo multiplica * 2
const arreglo3 = arreglo2.map( function( n ){
   return n * 2 
} )


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
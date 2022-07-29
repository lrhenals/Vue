

const persona ={
    nombre: 'Luis',
    apellido: 'rhenals',
    edad: 38,
    direccion: {
        ciudad: 'monteria',
        zip:057
    }
}

const persona2 = { ...persona };

persona2.nombre = 'alfonso'


console.log(persona)
console.log(persona2)
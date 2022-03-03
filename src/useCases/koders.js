const Koder = require('../models/koders')

// endpoint -> caso de uso -> modelos

function getAll() {
   return Koder.find({}) // promesa
}

function create(dataKoder) {
    // crear un koder en la BD
    const {name, lastName, age, gender} = dataKoder 
    return Koder.create({name, lastName, age, gender}) //
}


module.exports = {
    getAll,
    create
}
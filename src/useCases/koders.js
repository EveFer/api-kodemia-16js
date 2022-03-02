const Koder = require('../models/koders')

// endpoint -> caso de uso -> modelos

function getAll() {
   return Koder.find({}) // promesa
}

function create(dataKoder) {
    return Koder.create(dataKoder)
}

module.exports = {
    getAll,
    create
}
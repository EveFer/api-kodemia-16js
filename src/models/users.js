const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/ 
    },
    password: {
        type: String,
        required: true,
    }
})

// regex o expresion regular -> 

const model = mongoose.model('users', userSchema)

module.exports = model
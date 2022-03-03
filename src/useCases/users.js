const User = require('../models/users')


function getAll () {
    return User.find({})
}



async function signUp (dataUser) {
    // name, email, password
    // valudar que no exista un usuario con el email
    const {email, password, name} = dataUser

    const userFound = await User.findOne({email: email})

    if(userFound) throw new Error('User already exists')

    // encriptar mi constraseña
    

    return User.create({name, email, password})
}


module.exports = {
    getAll,
    signUp
}
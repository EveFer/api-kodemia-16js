const mongoose = require('mongoose')


const DB_USER = 'fernanda'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia16.gyrdh.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
    return mongoose.connect(URL) // regresa una promesa
}

module.exports = connect


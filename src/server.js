// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers
const cors = require('cors')
const express = require('express')

const kodersRouter = require('./routers/koders')
const usersRouter = require('./routers/users')

const server = express()


// middlewares
server.use(cors())
server.use(express.json())

// routers
server.use('/koders', kodersRouter)
server.use('/users', usersRouter)



module.exports = server




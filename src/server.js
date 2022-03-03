// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers
const express = require('express')
const kodersRouter = require('./routers/koders')

const server = express()


// middlewares
server.use(express.json())

// routers
server.use('/koders', kodersRouter)



module.exports = server




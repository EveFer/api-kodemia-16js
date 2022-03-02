
const server = require('./src/server')
const dbConnect = require('./src/lib/db')


dbConnect()
    .then(() => {
        console.log('Database connected :D')
        server.listen(8080, () => {
            console.log('Server running on port 8080')
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })


// GET /koders
/*
1.- Crear (asegurarme de que exista) el modelo necesario
2.- Crear el caso de uso necesario (useCases/)
3.- Crear el endpoint (routers/)
*/

// Práctica
// POST /koders
// PATCH /Koders/:id
// DELETE /koders/:id
// GET /koders/:id
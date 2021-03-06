const express = require('express')
const useCasesKoders = require('../useCases/koders')

const auth = require('../middlewares/auth')

const router = express.Router()

router.use(auth)

router.get('/', async (request, response) => {
    try {
        const {userCurrent} = request
        const allKoders = await useCasesKoders.getAll()
        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const koderToCreate = request.body

        const koderCreated = await useCasesKoders.create(koderToCreate)

        response.json({
            success: true,
            message: 'Koder created',
            data: {
                koder: koderCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create a koder',
            error: error.message
        })
    }
})

module.exports = router

// 
// PATCH /koders/:id paco
// DELETE /koders/:id hugo
// GET /koders/:id jess
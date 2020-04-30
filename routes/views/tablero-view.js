const rts = require('./../controllers')
const router = require('express').Router()

router.get('/seed/tableros', rts.seedTableroMany) //Ver todos los tableros
router.get('/seed/tablero/:id', rts.seedTablero) //ver un tablero

router.post('/create/tablero', rts.createTablero) //Crear un tablero
router.post('/create/many/tablero', rts.createTableroMany) //Crear varios tableros

// router.post('/update/friend/:id', rts.updateTest)
// router.post('/delete/friend/:id', rts.deleteTest)

module.exports = router

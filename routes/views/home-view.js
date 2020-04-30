const rts = require('./../controllers')
const router = require('express').Router()

router.get('/inicio', rts.test)
router.get('/', rts.inicio)

module.exports = router

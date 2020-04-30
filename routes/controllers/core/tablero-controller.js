let Tablero = require('./../../models/tablero')

module.exports = {
    seedTableroMany: async (req, res, next) => {
        try {
            let result = await Tablero.find()
            res.json(result)
        } catch (e) {
            res.json({
                message: 'Error al cargar todos los tableros',
                error: e,
            })
            console.log('error seedTableroMany: '+e)
        }
    },
    seedTablero: async (req, res, next) => {
         try {
            const resp = await Tablero.findById(req.params.id)
            res.json(resp)
        } catch (error) {
            res.json({
                message: 'Error al visualizar un tablero',
                error,
            })
            console.log('error seedTablero: '+error)
        }
    },

    createTablero: async (req, res, next) => {
        try {
            let tablero = new Tablero(req.body)
            let result = await tablero.save()
            res.json(result)
        } catch (error) {
            res.json({
                message: 'Error al crear un nuevo tablero',
                error,
            })
            console.log('Error createTablero: '+error)
        }
    },
    createTableroMany: async (req, res, next) => {
        try {
            let resp = Tablero.insertMany(
                req.body,
                { ordered: true }
            )
            res.json(resp)
        } catch (error) {
            res.json({
                message: 'Error al crear varios tableros',
                error,
            })
            console.log('Error createTableroMany: '+e)
        }
    },

    updateTablero: async (req, res, next) => {

    },
    updateTableroMany: async (req, res, next) => {

    },

    deleteTableroMany: async (req, res, next) => {

    },
    deleteTablero: async (req, res, next) => {

    }

}

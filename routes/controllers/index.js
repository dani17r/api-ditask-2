require('./../../options/conection')

const controllers = (url) => {
    return require(`./core/${url}-controller`)
}

let home = controllers('home')
let tablero = controllers('tablero')

module.exports = rts = {
    ...home,
    ...tablero,
}

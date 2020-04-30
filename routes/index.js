const views = (url) => {
    return require(`./views/${url}-view`)
}
const home = views('home')
const tablero = views('tablero')

var router = [
    tablero,
    home,
]

module.exports = router

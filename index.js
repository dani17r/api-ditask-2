const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

const options = require('./options/config')
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.options('*', cors(options.cors))
app.use(cors(options.cors))
app.use(routes)

app.listen(options.listen, function () {
    console.log('http://'+options.listen.hostname+':'+options.listen.port)
    console.log('http://localhost:'+options.listen.port)
})

const mongoose = require('mongoose')

// const uri = "mongodb+srv://diclase_:ykIniFDHFxBw8C5r@cluster0-nvm5y.gcp.mongodb.net/ditask?retryWrites=true&w=majority"

const uri = 'mongodb://localhost:27017/ditask-app'

let conection = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    poolSize: 7,
    keepAlive:true,
    family: 4,
})

conection.then(
  () => {
      console.log("connected")
  },
  err => {
      console.log("Conexion a la DB: ", err)
  }
)

module.exports = conection

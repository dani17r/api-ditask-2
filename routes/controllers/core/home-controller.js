module.exports = {
    inicio: (req, res, next) => {
        res.send('inicio')
    },
    test: (req,res, next)=>{
        res.send('abierto')
    },
    protected: (req,res)=>{
        res.send('cerrado_')
    },
}

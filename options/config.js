module.exports = {
    listen:{
        port :process.env.PORT || 9007,
        hostname: 'ditask-app.test',
    },
    cors: {
        origin: 'http://localhost:7000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        optionsSuccessStatus: 200,
        preflightContinue: false,
    },
    session:{
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }

}

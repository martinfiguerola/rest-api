// express, sequelize, pg, morgan
const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const {conn} = require('./src/models/index')
const {PORT} = require('./src/utils/config/index')
const app = express()

// aca se setea nuestros headers
//app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Content-Type", "application/json");
    next();
})
// setear nuestras rutas 
app.use('/api', routes)
// aca vamos a hacer nuestro middleware de control de errores
app.use ((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err)
    return res.status(status).send(message)
})
// aca tenemos que hacer nuestro server.listent
conn.sync({force: true})
.then(() => {
    console.log('base de datos conectada')
    app.listen(3000, () => {
        console.log(`el servidor esta escuchando en el puerto ${PORT}`)
    })
})

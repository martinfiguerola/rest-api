const {Sequelize} = require('sequelize')
const {dbUser, dbName, dbPort, dbPassword, dbHost} = require('../utils/config/index')
//console.log()
const RecordsFactory = require('./Records')

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
       host: dbHost,
       dialect: "postgres",
       logging: false,
       pool: {
         max: 3,
         min: 1,
         idle: 10000,
       },
       dialectOptions: {
         ssl: {
           require: true,
           rejectUnauthorized: false,
         },
         keepAlive: true,
       },
       ssl: true,
     });

const Records = RecordsFactory(sequelize)

module.exports = {
    conn: sequelize,
    Records,
}
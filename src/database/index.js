const dotenv = require('dotenv').config()
const Sequelize  = require('sequelize')

const connection = new Sequelize(

    process.env.POSTGRES_HOST,
    process.env.POSTGRES_PORT,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_DIALECT

)

module.exports = connection
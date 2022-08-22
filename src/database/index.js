require('dotenv').config()
const DataSource = require('typeorm').DataSource

const AppDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false
})


AppDataSource.initialize()
    .then (() => {
        console.log('\nDatabase connected!\n')
    }).catch(err => {
    console.log('\nError connecting to database!\n')
        })

module.exports = AppDataSource
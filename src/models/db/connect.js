require('dotenv').config() // Load .env file
const {Pool} = require('pg') // Load pg module and Pool class
// const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT} = process.env    

const pool = new Pool({ 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
})

// module.exports = pool;
// pool.query('SELECT * FROM genre', (err, res) => {
//     console.log(res.rows)
//     pool.end()
// })
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const db = require ('./database/index')


// app.get('/' , (req, res) => {
//     res.send('Hello World!')
// })


module.exports = app
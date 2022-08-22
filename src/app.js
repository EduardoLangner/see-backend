const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database/index')
        
module.exports = app
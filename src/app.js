const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const indexRouter = require('./routes/indexRouter')
const genreRouter = require('./routes/genreRouter')
const movieRouter = require('./routes/movieRouter')
const serieRouter = require('./routes/serieRouter')
const episodeRouter = require('./routes/episodeRouter')

require('./database/index')

app.use(express.json())
app.use(morgan('dev'))
app.use(indexRouter)
app.use(genreRouter)
app.use(movieRouter)
app.use(serieRouter)
app.use(episodeRouter)
app.use(cors()) 
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers')
    next()
})

module.exports = app                      
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

app.use((req, res, next) => {
    app.use(cors())
    res.header('Access-Control-Allow-Origin', 'http://localhost:19006')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    console.log('\nRequest received!\n')
    next()
})
app.use(express.json())
app.use(morgan('dev'))
app.use(indexRouter)
app.use(genreRouter)
app.use(movieRouter)
app.use(serieRouter)
app.use(episodeRouter)

module.exports = app                      
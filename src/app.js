const express = require('express')
const morgan = require('morgan')
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

module.exports = app
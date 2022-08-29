const express = require('express')
const morgan = require('morgan')
const app = express()
const indexRouter = require('./routes/indexRouter')
const genreRouter = require('./routes/genreRouter')
const movieRouter = require('./routes/movieRouter')
const serieRouter = require('./routes/serieRouter')

require('./database/index')

app.use(express.json())
app.use(morgan('dev'))
app.use(indexRouter)
app.use(genreRouter)
app.use(movieRouter)
app.use(serieRouter)

module.exports = app
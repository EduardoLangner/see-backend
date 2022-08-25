const express = require('express')
const morgan = require('morgan')
const app = express()
const indexRouter = require('./routes/indexRouter')
const genreRouter = require('./routes/genreRouter')

require('./database/index')

app.use(express.json())
app.use(morgan('dev'))
app.use(indexRouter)
app.use(genreRouter)

// app.get('/', (req, res) => {
//     res.send('Welcome to the SEE')
// })

// app.use((req, res, next) => { //caso nenhuma rota seja estabelecida
//     const error = new Error('Not found')
//     error.status = 404
//     next(error)
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500)
//     return res.send({
//         error: {
//             message: error.message
//         }
//     })
// })

module.exports = app
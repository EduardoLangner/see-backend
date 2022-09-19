const express = require('express')
const MovieController = require('../controllers/movieController')
const routes = express.Router()

routes.post('/insertMovie', MovieController.postMovie)
routes.get('/filmes', MovieController.getMovie)
routes.delete('/deleteMovie/:id', MovieController.deleteMovieById)

module.exports = routes
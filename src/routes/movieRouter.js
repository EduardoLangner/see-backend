const express = require('express')
const MovieController = require('../controllers/MovieController')
const routes = express.Router()

routes.post('/insertMovie', MovieController.store)
routes.get('/filmes', MovieController.index)
routes.delete('/deleteMovie/:id', MovieController.deleteMovieId)

module.exports = routes
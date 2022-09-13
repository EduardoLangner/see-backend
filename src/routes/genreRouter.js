const express = require('express')
const GenreController = require('../controllers/genreController')
const routes = express.Router()

routes.post('/insertGenre', GenreController.store)
routes.get('/generos', GenreController.index)
routes.delete('/deleteGenre/:id', GenreController.deleteGenreId)

module.exports = routes
const express = require('express')
const GenreController = require('../controllers/genreController')
const routes = express.Router()

routes.post('/insertGenre', GenreController.postGenre)
routes.get('/generos', GenreController.getGenre)
routes.delete('/deleteGenre/:id', GenreController.deleteGenreById)

module.exports = routes
const express = require('express')
const GenreController = require('../controllers/genreController')
const router = express.Router()

router.post('/insertGenre', GenreController.postGenre)
router.get('/generos', GenreController.getGenre)
router.delete('/deleteGenre/:id', GenreController.deleteGenreById)

module.exports = router
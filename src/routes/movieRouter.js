const express = require('express')
const MovieController = require('../controllers/movieController')
const router = express.Router()

router.post('/insertMovie', MovieController.postMovie)
router.get('/filmes', MovieController.getMovie)
router.delete('/deleteMovie/:id', MovieController.deleteMovieById)

module.exports = router
const express = require('express')
const SerieController = require('../controllers/serieController')
const router = express.Router()

router.post('/insertSerie', SerieController.postSerie)
router.get('/series', SerieController.getSerie)
router.delete('/deleteSerie/:id', SerieController.deleteSerieById)

module.exports = router
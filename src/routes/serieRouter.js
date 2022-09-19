const express = require('express')
const SerieController = require('../controllers/serieController')
const routes = express.Router()

routes.post('/insertSerie', SerieController.postSerie)
routes.get('/series', SerieController.getSerie)
routes.delete('/deleteSerie/:id', SerieController.deleteSerieById)

module.exports = routes
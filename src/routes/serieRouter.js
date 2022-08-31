const express = require('express')
const SerieController = require('../controllers/SerieController')
const routes = express.Router()

routes.post('/insertSerie', SerieController.store)
routes.get('/series', SerieController.index)
routes.delete('/deleteSerie/:id', SerieController.deleteSerieId)

module.exports = routes
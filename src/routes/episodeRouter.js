const express = require('express')
const EpisodeController = require('../controllers/episodeController')
const routes = express.Router()

routes.post('/insertEpisode', EpisodeController.store)
routes.get('/episodios', EpisodeController.index)
routes.delete('/deleteEpisode/:id', EpisodeController.deleteEpisodeId)

module.exports = routes
const express = require('express')
const EpisodeController = require('../controllers/episodeController')
const routes = express.Router()

routes.post('/insertEpisode', EpisodeController.postEpisode)
routes.get('/episodios', EpisodeController.getEpisode)
routes.get('/episodios/:id', EpisodeController.getEpisodeBySerie)
routes.delete('/deleteEpisode/:id', EpisodeController.deleteEpisodeById)

module.exports = routes
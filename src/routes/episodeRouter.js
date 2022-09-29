const express = require('express')
const EpisodeController = require('../controllers/episodeController')
const router = express.Router()

router.post('/insertEpisode', EpisodeController.postEpisode) 
router.get('/episodios', EpisodeController.getEpisode)
router.get('/episodios/:id', EpisodeController.getEpisodeBySerie)
router.delete('/deleteEpisode/:id', EpisodeController.deleteEpisodeById)

module.exports = router
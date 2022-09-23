const Episode = require('../models/Episode')   

module.exports = {

    async getEpisode(req, res) {
        try{
            const episode = await Episode.findAll()
            return res.status(200).json(episode)
        }catch(error){
            return res.status(400).json({error: 'Error to get episodes'})
        }
    },

    async getEpisodeBySerie(req, res) {
        try{
            const id = req.params.id
            const episode = await Episode.findAll({
                where: {
                    serie_id: id
                }
            })
            return res.status(200).json(episode)
        }catch(error){
            return res.status(400).json({error: 'Error to get episodes'})
        }
    },

    async postEpisode(req, res) {
        try{
            const episode = await Episode.bulkCreate(req.body)
            return res.status(200).json(episode)
        }catch(error){
            return res.status(400).json({error: 'Error to create episode'})
        }
    },

    async deleteEpisodeById(req, res) {
        try{
            const {id} = req.params
            const episode = await Episode.findByPk(id)
            await episode.destroy()
            return res.status(200).json(episode)
        }catch(error){
            return res.status(400).json({error: 'Error to delete episode'})
        }
    },
}
const Episode = require('../models/Episode')   

module.exports = {

    async index(req, res) {
        const episode = await Episode.findAll()
        return res.json(episode)
    },

    async store(req, res) {
        const episode = await Episode.bulkCreate(req.body)
        return res.json(episode)
    },

    async deleteEpisodeId(req, res) {
        const {id} = req.params
        const episode = await Episode.findByPk(id)
        await episode.destroy()
        return res.json(episode)
    },
}
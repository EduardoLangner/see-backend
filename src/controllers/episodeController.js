const Episode = require('../models/Episode')   

module.exports = {

    async index(req, res) {
        const episode = await Episode.findAll()
        return res.json(episode)
    },

    async store(req, res) {
        const {title} = req.body
        const {duration} = req.body
        const {serie_id} = req.body
        const {season} = req.body
        const {comment} = req.body
        const episode = await Episode.create({title, duration, serie_id, season, comment})
        return res.json(episode)
    },

    async deleteEpisodeId(req, res) {
        const {id} = req.params
        const episode = await Episode.findByPk(id)
        await episode.destroy()
        return res.json(episode)
    },
}
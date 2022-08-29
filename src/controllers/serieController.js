const Serie = require('../models/Serie')   

module.exports = {

    async index(req, res) {
        const serie = await Serie.findAll()
        return res.json(serie)
    },

    async store(req, res) {
        const {title} = req.body
        const {description} = req.body
        const {genre_id} = req.body
        const {parental_rating} = req.body
        const {evaluation} = req.body
        const {year} = req.body
        const {season_quantity} = req.body
        const serie = await Serie.create({title, description, genre_id, parental_rating, evaluation, year, season_quantity})
        return res.json(serie)
    },

    async deleteSerieId(req, res) {
        const {id} = req.params
        const serie = await Serie.findByPk(id)
        await serie.destroy()
        return res.json(serie)
    },
}
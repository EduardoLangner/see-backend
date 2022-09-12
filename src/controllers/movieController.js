const Movie = require('../models/Movie')   

module.exports = {

    async index(req, res) {
        const movie = await Movie.findAll()
        return res.json(movie)
    },

    async store(req, res) {
        const movie = await Movie.bulkCreate(req.body)
        return res.json(movie)
    },

    async deleteMovieId(req, res) {
        const {id} = req.params
        const movie = await Movie.findByPk(id)
        await movie.destroy()
        return res.json(movie)
    },
}
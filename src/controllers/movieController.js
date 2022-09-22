const Movie = require('../models/Movie')   

module.exports = {

    async getMovie(req, res) {
        const movie = await Movie.findAll()
        return res.json(movie)
    },

    async postMovie(req, res) {
        const movie = await Movie.bulkCreate(req.body)
        return res.json(movie)
    },

    async deleteMovieById(req, res) {
        const {id} = req.params
        const movie = await Movie.findByPk(id)
        await movie.destroy()
        return res.json(movie)
    },
    
}
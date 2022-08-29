const Movie = require('../models/Movie')   

module.exports = {

    async index(req, res) {
        const movie = await Movie.findAll()
        return res.json(movie)
    },

    async store(req, res) {
        const {title} = req.body
        const {description} = req.body
        const {genre_id} = req.body
        const {parental_rating} = req.body
        const {evaluation} = req.body
        const {duration} = req.body
        const {year} = req.body
        const {comment} = req.body
        const movie = await Movie.create({title, description, genre_id, parental_rating, evaluation, duration, year, comment})
        return res.json(movie)
    },

    async deleteMovieId(req, res) {
        const {id} = req.params
        const movie = await Movie.findByPk(id)
        await movie.destroy()
        return res.json(movie)
    },
}
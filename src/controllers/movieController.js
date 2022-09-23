const Movie = require('../models/Movie')   

module.exports = {

    async getMovie(req, res) {
        try{
            const movie = await Movie.findAll()
            return res.status(200).json(movie)
        }catch(error){
            return res.status(400).json({error: 'Error to get movies'})
        }
    },

    async postMovie(req, res) {
        try{
            const movie = await Movie.bulkCreate(req.body)
            return res.status(200).json(movie)
        }catch(error){
            return res.status(400).json({error: 'Error to create movie'})
        }
    },

    async deleteMovieById(req, res) {
        try{
            const {id} = req.params
            const movie = await Movie.findByPk(id)
            await movie.destroy()
            return res.status(200).json(movie)
        }catch(error){
            return res.status(400).json({error: 'Error to delete movie'})
        }
    },
}
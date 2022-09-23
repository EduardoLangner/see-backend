const Genre = require('../models/Genre')   

module.exports = {

    async getGenre(req, res) {
        try{
            const genres = await Genre.findAll()
            return res.status(200).json(genres)
        }catch(error){
            return res.status(400).json({error: 'Error to get genres'})
        }
    },

    async postGenre(req, res) {
        try{  
            const genre = await Genre.bulkCreate(req.body)
            return res.status(200).json(genre)
        }catch(error){
            return res.status(400).json({error: 'Error to create genre'})
        }
    },

    async deleteGenreById(req, res) {
        try{
            const {id} = req.params
            const genre = await Genre.findByPk(id)
            await genre.destroy()
            return res.status(200).json(genre)
        }catch(error){
            return res.status(400).json({error: 'Error to delete genre'})
        }
    },
}
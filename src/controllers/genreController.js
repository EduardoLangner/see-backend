const Genre = require('../models/Genre')   

module.exports = {

    async getGenre(req, res) {
        const genre = await Genre.findAll()
        return res.json(genre)
    },

    async postGenre(req, res) {
        const genre = await Genre.bulkCreate(req.body)
        return res.json(genre)
    },

    async deleteGenreById(req, res) {
        const {id} = req.params
        const genre = await Genre.findByPk(id)
        await genre.destroy()
        return res.json(genre)
    },
}
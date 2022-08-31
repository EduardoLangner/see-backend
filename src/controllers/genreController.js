const Genre = require('../models/Genre')   

module.exports = {

    async index(req, res) {
        const genre = await Genre.findAll()
        return res.json(genre)
    },

    async store(req, res) {
        const {name} = req.body
        const genre = await Genre.create({name})
        return res.json(genre)
    },

    async deleteGenreId(req, res) {
        const {id} = req.params
        const genre = await Genre.findByPk(id)
        await genre.destroy()
        return res.json(genre)
    },
}
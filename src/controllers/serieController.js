const Serie = require('../models/Serie')   

module.exports = {

    async index(req, res) {
        const serie = await Serie.findAll()
        return res.json(serie)
    },

    async store(req, res) {
        const serie = await Serie.bulkCreate(req.body)
        return res.json(serie)
    },

    async deleteSerieId(req, res) {
        const {id} = req.params
        const serie = await Serie.findByPk(id)
        await serie.destroy()
        return res.json(serie)
    },
}
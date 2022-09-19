const Serie = require('../models/Serie')   

module.exports = {

    async getSerie(req, res) {
        const serie = await Serie.findAll()
        return res.json(serie)
    },

    async postSerie(req, res) {
        const serie = await Serie.bulkCreate(req.body)
        return res.json(serie)
    },

    async deleteSerieById(req, res) {
        const {id} = req.params
        const serie = await Serie.findByPk(id)
        await serie.destroy()
        return res.json(serie)
    }
}
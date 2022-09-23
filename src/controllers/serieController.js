const Serie = require('../models/Serie')   

module.exports = {

    async getSerie(req, res) {
        try{
            const serie = await Serie.findAll()
            return res.status(200).json(serie)
        }catch(error){
            return res.status(400).json({error: 'Error to get series'})
        }
    },

    async postSerie(req, res) {
        try{
            const serie = await Serie.bulkCreate(req.body)
            return res.status(200).json(serie)
        }catch(error){
            return res.status(400).json({error: 'Error to create serie'})
        }
    },

    async deleteSerieById(req, res) {
        try{
            const {id} = req.params
            const serie = await Serie.findByPk(id)
            await serie.destroy()
            return res.status(200).json(serie)
        }catch(error){
            return res.status(400).json({error: 'Error to delete serie'})
        }
    }
}
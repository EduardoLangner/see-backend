const List = require('../models/List')

module.exports = {

    async getMineList(req, res) {
        try{
            const list = await List.findAll()
            if(list.length == 0){
                return res.status(200).json({error: "Sua lista está vazia"})
            }else{
                return res.status(200).json(list)
            }
        }catch(error){
            return res.status(400).json({error: "Error to get your list"})
        }
    },

    async postMineList(req, res) {
        try{
            const list = await List.create(req.body)
            return res.status(200).json(list)
        }catch(error){
            return res.status(400).json({error: "Error to create your list"})   
        }
    }
}
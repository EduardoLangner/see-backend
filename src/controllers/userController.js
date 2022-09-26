const User = require('../models/User')

module.exports = {

    async getUser(req, res) {
        try{
            const user = await User.findAll()
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({error: 'Error to get users'})
        }
    },

    async getUserById(req, res) {
        try{
            const {id} = req.params
            const user = await User.findByPk(id)
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({error: 'Error to get user'})
        }
    },
    
    async deleteUserById(req, res) {
        try{
            const {id} = req.params
            const user = await User.findByPk(id)
            await user.destroy()
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({error: 'Error to delete user'})
        }
    },
    
    async createUser(req, res) {
        try{
            const user = await User.create(req.body)
            return res.status(200).json(user)
        }catch(error){
            if(error.name === 'SequelizeUniqueConstraintError'){
            return res.status(400).json({error: 'Email already exists'})
            }else{
            return res.status(400).json({error: 'Error to create user'})
            }
        }
    }
}
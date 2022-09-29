const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
            return res.status(200).json({message: 'Deleted user:', user})
        }catch(error){
            return res.status(400).json({error: 'Error to delete user'})
        }
    },
    
    async insertUser(req, res) {
        try{
            const {name, last_name, email, password} = req.body
            const hash = bcrypt.hashSync(password, 10)
            const user = await User.create({name, last_name, email, password: hash})
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            console.log(`\nHASH: ${hash}\n`)
            return res.status(200).json({
                message: 'User created successfully',
                user,
                token: token
            })
        }catch(error){
            if(error.name === 'SequelizeUniqueConstraintError'){
            return res.status(400).json({error: 'Email already exists'})
            }else{
            return res.status(400).json({error: 'Error to create user'})
            }
        }
    },

    async updateUser(req, res) {
        try{
            const {id} = req.params
            const {name, last_name, email, password} = req.body
            const user = await User.findByPk(id)
            await user.update({name, last_name, email, password})
            return res.status(200).json({message: 'Updated user:', user})
        }catch(error){
            return res.status(400).json({error: 'Error to update user'})
        }
    }
}
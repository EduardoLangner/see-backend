const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    
    async login(req, res) {

        try{
            const {email, password} = req.body

            const user = await User.findOne({where: {email}})
            if(!user){
                return res.status(400).json({error: 'Email or password invalid, try again'})
            }

            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'})

            const checkPassword = bcrypt.compareSync(password, user.password)
            if(!checkPassword){
                return res.status(404).json({error: 'Email or password invalid, try again'})
            }else{
                return res.status(200).json({
                    message: 'Login successfully',
                    user,
                    token: token
                })
            } 
        }catch(error){
           return res.status(400).json({error: 'Error to login'})
        }
    }
}
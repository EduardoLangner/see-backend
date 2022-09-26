const express = require('express')
const UserController = require('../controllers/userController')
const routes = express.Router()

routes.get('/users', UserController.getUser)
routes.get('/users/:id', UserController.getUserById)
routes.post('/signup', UserController.createUser)
routes.post('/login', UserController.loginUser)
routes.delete('/deleteUser/:id', UserController.deleteUserById)

module.exports = routes
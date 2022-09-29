const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()

router.get('/users', UserController.getUser)
router.get('/users/:id', UserController.getUserById)
router.post('/signup', UserController.insertUser)
router.delete('/deleteUser/:id', UserController.deleteUserById)
router.put('/updateUser/:id', UserController.updateUser)

module.exports = router
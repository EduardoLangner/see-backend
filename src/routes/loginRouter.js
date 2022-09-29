const express = require('express')
const AuthenticationController = require('../controllers/authenticationController')
const router = express.Router()

router.post('/login', AuthenticationController.login)

module.exports = router
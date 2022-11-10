const express = require('express')
const List = require('../controllers/listController')
const router = express.Router()

router.get('/minhaLista', List.getMineList)
router.post('/insertObjectInMineList', List.postMineList)

module.exports = router
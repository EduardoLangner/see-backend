const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the SEE')
})

// router.use((req, res, next) => { //caso nenhuma rota seja estabelecida
//     const error = new Error('Not found')
//     error.status = 404
//     next(error)
// })

// router.use((error, req, res, next) => { 
//     res.status(error.status || 500)
//     return res.send({
//         error: {
//             message: error.message
//         }
//     })
// })

module.exports = router
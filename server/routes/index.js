const express = require('express')
const clientRoute = require('./clientRoute')
const router = express.Router()

router.use("/client",clientRoute)

module.exports = router
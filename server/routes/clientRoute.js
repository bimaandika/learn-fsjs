const express = require('express');
const router = express.Router()
const userController = require('../controllers/clientController');

router.post('/register', userController.register)
router.get('/getClient', userController.getClient)

module.exports = router
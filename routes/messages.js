const express = require('express')
const messageController = require('../controllers/messageController')
const router = express.Router()

router.use('/', messageController.getAllMessages)

module.exports = router
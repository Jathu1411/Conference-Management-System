const express = require('express')
const router = express.Router()
const controller = require('../controller/notificationController')

router.post('/notification',controller.postNotification);
module.exports = router;
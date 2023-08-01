const express = require('express')
const router = express.Router()
const studentsController = require('../../controllers/studentsController')


router.get('/getdata', studentsController.getdata)

router.post('/adddata', studentsController.adddata)

router.post('/getonedata', studentsController.getonedata)

router.post('/updatedata', studentsController.updatedata)

router.delete('/deletedata', studentsController.deletedata)

module.exports = router

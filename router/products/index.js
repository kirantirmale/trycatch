const express = require('express')
const router = express.Router()
const productsController = require('../../controllers/productsController')


router.get('/getdata', productsController.getdata)

router.post('/adddata', productsController.adddata)

router.post('/getonedata', productsController.getonedata)

router.post('/updatedata', productsController.updatedata)

router.delete('/deletedata', productsController.deletedata)

module.exports = router

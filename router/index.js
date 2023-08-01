const express = require('express')
const router = express.Router()

const products = require('./products')
// const students = require('./students')
// const user = require('./user')

router.use('/products',products)
// router.use('/students',students)
// router.use('/user',user)

module.exports = router
const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

//gets
router.get(("/products"), productsController.list)

router.get(("/products/:id"), productsController.single)

//posts
router.post(('/products'), productsController.create)
router.post(('/products/:id'), productsController.createReview)

module.exports = router
const express = require('express')
const router = express.Router()

// console.log('this is inside the router')
// console.log('and we can get the data>',vehicles)
const vehicleController = require("../controllers/vehicles")

//gets
router.get(("/vehicles"),vehicleController.list) 

router.get(("/vehicles/:id"), vehicleController.single)
//post
router.post(('/vehicles'), vehicleController.create)

module.exports = router
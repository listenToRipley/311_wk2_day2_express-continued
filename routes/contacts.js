const express = require('express')
const router = express.Router()

const contactsController = require("../controllers/contacts")

  //gets
  router.get(("/contacts"), contactsController.list)

  router.get(("/contacts/:id"), contactsController.single)
  
    //posts
    router.post(('/contacts'), contactsController.create)

    module.exports = router
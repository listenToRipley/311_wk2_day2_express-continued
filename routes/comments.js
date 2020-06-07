const express = require('express')
const router = express.Router()

const commentsController = require("../controllers/comments")

//gets
router.get(("../data/comments"), commentsController.list)

router.get(("/comments/:id"), commentsController.single)

  //posts
  router.post(('/comments'), commentsController.create)

module.exports = router
const express = require('express')
const router = express.Router()

router.get(("../data/comments"), (req, res) => {
  res.json(comments)
})

router.get(("/comments/:id"),(req, res) => {
  let idNum = parseInt(req.params.id)
  // console.log('return number is :',idNum)
  //locate the id from the param 
  let findId  = (doc, num) => {
  let say = doc.find(comment  => { 
      // console.log('each contact ? ', vehicle)
      // console.log('their ids?', comment._id)
      return comment._id === num
        })
      return res.json(say)
    }
  if(findId(comments, idNum) === false){
    res.status(!200).send('not working')
  }
})

  //posts
  router.post(('/comments'), (req, res) => {
    // console.log('we are inside the comments post request')
    const count = comments.length
    const input = req.body
    //create a new comments
    const newComment = {
      _id: count+1, //since the id is based on position in the object, this it should just be the 
      body: input.body,
      postId: 1 
    }
      //console.log(`this is my new addition object ${newComment}`)
    if(!newComment.body) {
    //if you are missing the name or occupation, then is not a valid entry.
    res.status(400).json({msg: 'Please include a comment'})
  } else {
    //add the new entry to the object where it will be stored
    comments.push(newComment)
    //return the whole new object with the new contact included  
    res.json(comments)
  }
  })

module.exports = router
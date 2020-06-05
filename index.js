const express = require("express");
const bodyParser = require("body-parser");

const contacts = require("./data/contacts")
const vehicles = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'))
//allows use ot pull in raw json doc
app.use(bodyParser.json())
//allows us to use url content
app.use(bodyParser.urlencoded({extended: false}))

app.get(("/contacts"), (req, res, next) => {
  res.json(contacts)
  next()
})
app.get(("/contacts/:id"),(req, res, next) => {
  let idNum = parseInt(req.params.id)
  // console.log('return number is :',idNum)
  //locate the id from the param 
  let findId  = (doc, num) => {
  let person = doc.find(contact  => { 
      console.log('each contact ? ', contact)
      console.log('their ids?', contact._id)
      return contact._id === num
        })
      return res.json(person)
    }
  if(findId(contacts, idNum) === false){
    res.status(!200).send('not working')
  }
  next()
})

app.get(("/vehicles"), (req, res, next) => {
  res.json(vehicles)
  next()
})
app.get(("/comments"), (req, res, next) => {
  res.json(comments)
  next()
})
app.get(("/products"), (req, res, next) => {
  res.json(products)
  next()
})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

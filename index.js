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


//CONTACTS
  //gets
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
      // console.log('each contact ? ', contact)
      // console.log('their ids?', contact._id)
      return contact._id === num
        })
      return res.json(person)
    }
  if(findId(contacts, idNum) === false){
    res.status(!200).send('not working')
  }
  next()
})

  //posts
  app.post(('/contacts'), (req, res) => {
    const count = contacts.length
    //create a new contact
    const newContact = {
      _id: count+1, //since the id is based on position in the object, this it should just be the 
      name: req.body.name,
      occupation: req.body.occupation,
      //we need to conclude logic that states this is a link to an img. 
      avatar: req.body.avatar 
    }
      //console.log(`this is my new addition object ${newEntry}`)
  // need to require their name and occupation, but the picture is optional
    if(!newEntry.name || !newEntry.occupation) {
    //if you are missing the name or occupation, then is not a valid entry.
    return res.status(!200).json({msg: 'Please include a name and occupation'})
  } 
    //add the new entry to the object where it will be stored
    contacts.push(newEntry)
    //return the whole new object with the new contact included  
    return res.json(contacts)
  })

//VEHICLES
app.get(("/vehicles"), (req, res, next) => {
  res.json(vehicles)
  next()
})

app.get(("/vehicles/:id"),(req, res, next) => {
  let idNum = parseInt(req.params.id)
  // console.log('return number is :',idNum)
  //locate the id from the param 
  let findId  = (doc, num) => {
  let car = doc.find(vehicle  => { 
      // console.log('each contact ? ', vehicle)
      console.log('their ids?', vehicle._id)
      return vehicle._id === num
        })
      return res.json(car)
    }
  if(findId(vehicles, idNum) === false){
    res.status(!200).send('not working')
  }
  next()
})

//COMMENTS
app.get(("/comments"), (req, res, next) => {
  res.json(comments)
  next()
})

app.get(("/comments/:id"),(req, res, next) => {
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
  next()
})

//PRODUCTS
app.get(("/products"), (req, res, next) => {
  res.json(products)
  next()
})

app.get(("/products/:id"),(req, res, next) => {
  let idNum = parseInt(req.params.id)
  // console.log('return number is :',idNum)
  //locate the id from the param 
  let findId  = (doc, num) => {
  let item = doc.find(product  => { 
      // console.log('each contact ? ', vehicle)
      // console.log('their ids?', product._id)
      return product._id === num
        })
      return res.json(item)
    }
  if(findId(products, idNum) === false){
    res.status(!200).send('not working')
  }
  next()
})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

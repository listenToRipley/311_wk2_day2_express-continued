const products = require("../data/products")

const list = (req, res) => {
  res.json(products)
}

const single = (req, res) => {
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
}

const create = (req, res) => {
  console.log('we are inside the contacts post request')
  const count = products.length
  const input = req.body

  //create new product
  const newProduct = {
    _id: count+1, //since the id is based on position in the object, this it should just be the 
    name: input.name,
    description: input.description,
    rating: input.rating,
    imgUrl: input.imgUrl,
    price: input.price,
    category: input.category,
    review: [createReview]
  }
    //console.log(`this is my new addition object ${newComment}`)
  if(!newProduct.name || !newProduct.price) {
  //if you are missing the name or occupation, then is not a valid entry.
  res.status(400).json({msg: 'Please include a name and price'})
} else {
  //add the new entry to the object where it will be stored
  products.push(newProduct)
  //return the whole new object with the new contact included  
  res.json(products)
}
}
//~~~ tried to create a separate post method of the review, need to come back and work on it.
//since the this is a nested array within the reviews, we are creating a new object every time we want a new review, so this should get created first and separately. 
const createReview =  (req, res) => { 
//we have to create the product before we can review it.
//since the product has been created, then we need to filter down to that product then locate the review field
let idNum = parseInt(req.params.id)
console.log('return number is :',idNum)
//locate the id from the param 
let findId  = (doc, num) => {
let item = doc.find(product  => { 
    console.log('each contact ? ', product)
    console.log('their ids?', product._id)
    return product._id === num
      })
  }

const reviews = {
description: input.description, 
rating: input.rating
}
if (findId) {
  return res.json(reviews)
}
if(findId(products, idNum) === false){
  res.status(!200).send('not working')
}
}

module.exports = {
  list,
  single,
  create, 
  createReview
}
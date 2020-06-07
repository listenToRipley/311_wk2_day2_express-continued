const vehicles = require("../data/vehicles")

const list = (req, res) => {
  res.json(vehicles)
}

const single = (req, res) => {
  let idNum = parseInt(req.params.id)
  console.log('return number is :',idNum)
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
}

const create = (req, res) => {
  console.log('we are inside the vehicles post request')
  const count = vehicles.length
  const input = req.body
  //create a new vehicles
  const newVehicle = {
    _id: count+1, //since the id is based on position in the object, this it should just be the 
    imgUrl: input.imgUrl,
    year: parseInt(input.year),
    make: input.make,
    model: input.model,
    //might want to come back and format this more for money 
    price: (`$${parseInt(input.price)}`),
    km: parseInt(input.km),
    miles: parseInt(input.miles),
    fuel: input.fuel,
    city: input.city,
    isNew: input.isNew

  }
  //would like to have default setting if nothing is provided.
  // console.log(`this is my new addition object`, input, 'and the newVehicle object looks like', newVehicle)
// need to require  their make and model
  if(!newVehicle.make || !newVehicle.model) {
  //if you are missing the name or occupation, then is not a valid entry.
  res.status(400).json({msg: 'Please include the make and model'})
} else {
    //add the new entry to the object where it will be stored
    //~~isNew, city and fuel are not currently being included in the object, not sure why.
  vehicles.push(newVehicle)
  //return the whole new object with the new vehicle included  
  res.json(vehicles)
}
}

//export the variable related to your routes so they can be used
module.exports = {
  list,
  single,
  create
}
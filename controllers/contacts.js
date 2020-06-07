const contacts = require("../data/contacts")

const list = (req, res) => {
  res.json(contacts)
}

const single = (req, res) => {
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
}

const create =  (req, res) => {
  console.log('we are inside the contacts post request')
  const count = contacts.length
  const input = req.body
  //create a new contact
  const newContact = {
    _id: count+1, //since the id is based on position in the object, this it should just be the 
    name: input.name,
    occupation: input.occupation,
    //we need to conclude logic that states this is a link to an img. 
    avatar: input.avatar 
  }
    //console.log(`this is my new addition object ${newContact}`)
// need to require their name and occupation, but the picture is optional
  if(!newContact.name || !newContact.occupation) {
  //if you are missing the name or occupation, then is not a valid entry.
  res.status(400).json({msg: 'Please include a name and occupation'})
} else {
  //add the new entry to the object where it will be stored
  contacts.push(newContact)
  //return the whole new object with the new contact included  
  res.json(contacts)
}
}

module.exports = {
  list,
  single,
  create
}
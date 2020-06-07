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
const routeContacts = require('./routes/contacts')
app.get(routeContacts)

//VEHICLES
const routeVehicles = require('./routes/vehicles')
app.get(routeVehicles)

//COMMENTS
const routeComments = require('./routes/comments')
app.get(routeComments)

//PRODUCTS
const routerProducts = require('./routes/products')
app.get(routerProducts)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

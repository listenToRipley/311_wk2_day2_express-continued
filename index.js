const express = require("express");
const bodyParser = require("body-parser");
//all your data
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
app.use(require('./routes/contacts'))

//VEHICLES
app.use(require('./routes/vehicles'))

//COMMENTS
app.use(require('./routes/comments'))

//PRODUCTS
app.use(require('./routes/products'))


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

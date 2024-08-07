const express = require('express')
require('dotenv').config();
const cors = require('cors'); // Import CORS

// configuration variables
const port = require ('./app/config/vars').port;

//db config
require ('./app/config/db');

//import the router
const postRoutes = require('./app/routes/post_router');


//start express
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test route
app.get('/', (req, res) => {
    res.json({msg: "Hello world"})
})

// use the router
app.use('/', postRoutes);

//create server conn
app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
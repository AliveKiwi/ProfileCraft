require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { mongoose } = require('./config/database');
const { routes } = require('./config/route');

const app = express()
const port = 3005

app.use(express.json()) //    You need to use bodyParser() if you want the form data to be available in req.body.
app.use(cors())
app.use('/', routes)

app.listen(port, function(){
    console.log('Listening on port:', port)
})



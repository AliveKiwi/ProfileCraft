const mongoose = require('mongoose');
express = require('express');
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ProfileCraft-DB', { useNewUrlParser: true, useCreateIndex: true })
    .then(function(){
        console.log('Connection to database established.')
    })
    .catch(function(){
        console.log('Connection to database failed to establish.')
    })

module.exports = { 
    mongoose
}
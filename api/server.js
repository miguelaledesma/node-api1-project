// BUILD YOUR SERVER HERE
const express = require('express')

const server = express();

server.use(express.json()); 

const User = require('./users/model')

server.get('/api/users', (request, response) => {
    User.find().then(user => {
        response.json(user)
    })
})




module.exports = server; // EXPORT YOUR SERVER instead of {}

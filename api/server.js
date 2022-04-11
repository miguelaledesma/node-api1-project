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

server.get('/api/users/:id', (request, response) => {
    User.findById(request.params.id).then(user => {
        if(!user){
            response.status(404).json({ message: "The user with the specified ID does not exist" })
        } else {
            response.json(user)
        }
    })
})




module.exports = server; // EXPORT YOUR SERVER instead of {}

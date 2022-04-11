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

server.post('/api/users', (request, response) => {
    let user = request.body
    User.insert(user).then(user => {
        if(!user){
            response.status(400).json({ message: "Please provide name and bio for the user" })
        } else{
            response.status(201).json(user)
        }
        
    })
})




module.exports = server; // EXPORT YOUR SERVER instead of {}

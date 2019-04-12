const express = require('express')
const path = require('path')

// rootDir global reference
global.rootDir = path.resolve(__dirname)
console.log(rootDir)

const app = express()
app.use(express.json())

const models = require('./models');

// user handlers
app.post('/user', (req, res) => {
    models.User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => console.log(err))
})
app.get('/user', (req, res) => {
    models.User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

// app startup
const PORT = 3001
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

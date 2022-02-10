const express = require('express')
const usersRouter = require('./users/users-router')
const cors = require('cors')

const server = express()

server.use(cors())

server.use(express.json())

server.use('/api', usersRouter)

server.use('*', (req, res) => {
    res.send(`<h1>Hello there! Nice to meet you! 😁</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('oops! you messed up!')
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
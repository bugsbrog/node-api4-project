require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'Hannah' },
        { id: 2, username: 'Trey' },
        { id: 3, username: 'Philip' },
        { id: 4, username: 'Danielle' },
        { id: 5, username: 'Ryan' },
    ])
})

server.use('*', (req, res) => {
    res.send(`<h1>Hello! 😁</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('oops! you messed up!')
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
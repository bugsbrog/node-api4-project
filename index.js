require('dotenv').config()
const express = require('express')

const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'Hannah' },
        { id: 2, username: 'Trey' },
        { id: 3, username: 'Philip' },
        { id: 4, username: 'Danielle' },
        { id: 5, username: 'Ryan' },
    ])
})

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
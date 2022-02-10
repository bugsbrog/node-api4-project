const server = require('./api/server')

require('dotenv').config()

const PORT = process.env.PORT || 9000

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
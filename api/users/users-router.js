const express = require('express')

const router = express.Router()

router.get('/users', (req, res) => {
    res.json([
        { id: 1, username: 'Hannah' },
        { id: 2, username: 'Trey' },
        { id: 3, username: 'Philip' },
        { id: 4, username: 'Danielle' },
        { id: 5, username: 'Ryan' },
    ])
})

router.post('/register', (req, res, next) => {
    const { username } = req.body
        if (!username) {
            next({
                status: 400,
                message: 'Username required!'
            })
        } else {
            res.status(201).json(username)
        }
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body
        if (!username || !password) {
            next({
                status: 400,
                message: 'Username AND password required'
            })
        } else {
            res.send(`<h2>Welcome to an AWESOME page! 🥳</h2>`)
        }
})

module.exports = router
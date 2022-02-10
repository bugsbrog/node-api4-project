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
                message: 'Must provide required name field!'
            })
        } else {
            res.status(201).json(username)
        }
})





module.exports = router
const express = require('express')

const router = express.Router()

router.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'Hannah' },
        { id: 2, username: 'Trey' },
        { id: 3, username: 'Philip' },
        { id: 4, username: 'Danielle' },
        { id: 5, username: 'Ryan' },
    ])
})







module.exports = router
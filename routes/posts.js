const express = require('express')
const router = express.Router()
const controllers = require('../controllers/posts.js')

router.get('/', controllers.show)
router.delete('/:id', controllers.destroy)

module.exports = router
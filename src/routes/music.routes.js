const express = require('express')
const { createMusic, albumCreate } = require('../controller/music.controller')
const multer = require('multer')

const router = express.Router()

const upload = multer({
  storage: multer.memoryStorage(),
})

router.post('/upload', upload.single('music'), createMusic)
router.post('/album', albumCreate)

module.exports = router

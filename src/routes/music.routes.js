const express = require('express')
const { artiestMiddleware } = require('../middlewares/artiest.middleware')
const { createMusic, albumCreate, getAllMusic } = require('../controller/music.controller')
const multer = require('multer')

const router = express.Router()

const upload = multer({
  storage: multer.memoryStorage(),
})

router.post('/upload', artiestMiddleware, upload.single('music'), createMusic)
router.post('/album', artiestMiddleware, albumCreate)
router.get('/', getAllMusic)

module.exports = router

const express = require('express')
const { artiestMiddleware } = require('../middlewares/artiest.middleware')
const {
  createMusic,
  albumCreate,
  getAllMusic,
  getAllAlbum,
} = require('../controller/music.controller')
const multer = require('multer')
const { authMiddleware } = require('../middlewares/auth.middleware')

const router = express.Router()

const upload = multer({
  storage: multer.memoryStorage(),
})

router.post('/upload', artiestMiddleware, upload.single('music'), createMusic)
router.post('/album', artiestMiddleware, albumCreate)
router.get('/', authMiddleware, getAllMusic)
router.get('/album', authMiddleware, getAllAlbum)

module.exports = router 

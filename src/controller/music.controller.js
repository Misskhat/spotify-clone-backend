const musicModel = require('../model/music.model')
const albumModel = require('../model/album.model')
const jwt = require('jsonwebtoken')
const { uploadImage } = require('../services/stroage.services')

const createMusic = async (req, res) => {
  try {
    const { title } = req.body
    const file = req.file
    const result = await uploadImage(file)

    const newMusic = await musicModel.create({
      uri: result.url,
      title: title,
      artist: req.user.id,
    })

    return res.send({
      message: 'Music created',
      music: {
        id: newMusic._id,
        uri: newMusic.uri,
        artist: newMusic.artist,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const albumCreate = async (req, res) => {
  try {
    const { title, music } = req.body
    const album = await albumModel.create({
      title,
      music,
      artist: req.user.id,
    })

    return res.send({
      message: 'Album successfully created',
      album: album,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllMusic = async (req, res) => {
  const musics = await musicModel.find().populate('artist', 'userName email')
  return res.status(200).json({
    message: 'Music successfully fetch',
    music: musics,
  })
}

const getAllAlbum = async (req, res) => {
  const album = await albumModel.find().select('title artist').populate('artist')
  return res.status(200).json({
    message: 'Album fetch successfully',
    album: album,
  })
}

module.exports = { createMusic, albumCreate, getAllMusic, getAllAlbum }

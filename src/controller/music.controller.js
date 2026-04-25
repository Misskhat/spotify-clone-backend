const musicModel = require('../model/music.model')
const jwt = require('jsonwebtoken')
const { uploadImage } = require('../services/stroage.services')

const createMusic = async (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.send({ message: 'Unauthorized access' })
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_TOKEN)
    if (decodedToken.role !== 'artist') {
      return res.send({ message: 'Unauthorized access' })
    }
  } catch (error) {
    return res.send({ message: 'Unauthorized access' })
  }

  const { title } = req.body
  const file = req.file
  const result = await uploadImage(file)

  const newMusic = await musicModel.create({
    uri: result.url,
    title: title,
    artist: decodedToken.id,
  })

  return res.send({
    message: 'Music created',
    music: {
      id: newMusic._id,
      uri: newMusic.uri,
      artist: newMusic.artist,
    },
  })
}

module.exports = { createMusic }

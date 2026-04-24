const musicModel = require('../model/music.model')
const jwt = require('jsonwebtoken')
const createMusic = async (req, res) => {
  const token = req.cookie.token

  if (!token) {
    return res.send({ message: 'Unauthorized access' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN)
    if (decodedToken.role !== 'artist') {
      return res.send({ message: 'Unauthorized access' })
    }
  } catch (error) {
    return res.send({ message: 'Unauthorized access' })
  }
}

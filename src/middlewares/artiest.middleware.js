const jwt = require('jsonwebtoken')

const artiestMiddleware = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({
      message: 'User not available.',
    })
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_TOKEN)
    if (decoded.role !== 'artist') {
      return res.status(403).json({ message: 'Unauthorized access' })
    }
    req.user = decoded
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: `error => ${error}` })
  }
}

module.exports = { artiestMiddleware }

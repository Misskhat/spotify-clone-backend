const ImageKit = require('imagekit')

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

const uploadImage = async (file) => {
  try {
    const result = await imageKit.upload({
      file: file.buffer,
      fileName: `${file.originalname}` + Date.now(),
      folder: 'yt-complete-backend/music',
    })
    return result
  } catch (error) {
    return res.send({ message: error.message })
  }
}

module.exports = { uploadImage }

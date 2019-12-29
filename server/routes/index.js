const express = require('express');
const router = express.Router();
const {upload} = require('middlewares/upload')
// const S3Service = require('services/s3')
const ocrService = require('services/ocr')
const Image = require('models/image')

const storeImage = file => {
  return ocrService.recognize({url: file.location})
    .then(text => {
      const image = new Image({
        text,
        key: file.key
      })
      return image.save()
    })
}

router.post('/upload', upload.array("image", 3), (req, res) => {
  const promises = req.files.map(storeImage)
  return Promise.all(promises)
    .then(images => {
      console.log("acaaa", images)
      res.json({images})
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(503)
    })
});

router.get('/search', async (req, res) => {
  // const images = await S3Service.getImages()
  const images = await Image.find()
  await res.json({images});

});

module.exports = router;

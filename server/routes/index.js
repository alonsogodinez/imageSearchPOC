const express = require('express');
const router = express.Router();
const {upload} = require('middlewares/upload')
const ocrService = require('services/ocr')
const algoliaService = require('services/algolia')
const {buildImageURL} = require('utils/s3')
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
      return images.map(image => ({
        title: image.key,
        url: buildImageURL(image.key)
      }))
    })
    .then(images => res.json({images}))
    .catch((err) => {
      console.log(err)
      res.sendStatus(503)
    })
});

router.get('/search', async (req, res) => {
  const {searchText} = req.query
  try {
    const {hits: images} = await algoliaService.search(searchText)
    await res.json({images});
  } catch (e) {
    res.sendStatus(503)
  }

});

module.exports = router;

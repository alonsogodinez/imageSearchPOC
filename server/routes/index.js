const express = require('express');
const router = express.Router();
const {upload} = require('middlewares/upload')
const S3Service = require('services/s3')


router.post('/upload', upload.single("image"), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', async (req, res) => {
  const images = await S3Service.getImages()
  await res.json({images});
});

module.exports = router;

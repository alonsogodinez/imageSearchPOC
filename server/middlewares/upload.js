const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = require("utils/s3")

module.exports.upload = multer({
  storage: multerS3({
    s3: s3.getInstance(),
    bucket: s3.getBucket(),
    acl: 'public-read',
    key: (req, file, cb) => cb(null, Date.now().toString())
  })
})
const aws = require('aws-sdk')
const s3Utils = require("utils/s3")

const s3 = s3Utils.getInstance()
const Bucket = s3Utils.getBucket()
const BucketURL = s3Utils.getBucketURL()


const listObjectPromise = (params) => new Promise((resolve, reject)  => {
  s3.listObjects(params, (err, data) => {
    if(err) reject(err)
    resolve(data)
  })
})

const buildImageURL = (key) => `${BucketURL}${key}`;

module.exports.getImages = async () => {
  const {Contents} =  await listObjectPromise({Bucket})
  return Contents.map(image => ({
    url: buildImageURL(image.Key),
    name: image.Key
  }))
}
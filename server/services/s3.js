const aws = require('aws-sdk')
const s3Utils = require("utils/s3")

const s3 = s3Utils.getInstance()
const Bucket = s3Utils.getBucket()


const listObjectPromise = (params) => new Promise((resolve, reject)  => {
  s3.listObjects(params, (err, data) => {
    if(err) reject(err)
    resolve(data)
  })
})

module.exports.getImages = async () => {
  const {Contents} =  await listObjectPromise({Bucket})
  return Contents.map(image => ({
    url: s3Utils.buildImageURL(image.Key),
    name: image.Key
  }))
}
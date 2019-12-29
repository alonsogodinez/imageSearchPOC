const aws = require('aws-sdk')
const { S3: S3_Config } = require('config')
const s3 = new aws.S3({
  accessKeyId: S3_Config.ACCESS_KEY,
  secretAccessKey: S3_Config.SECRET_KEY
})

module.exports.getInstance = () => s3
module.exports.getBucket = () => S3_Config.BUCKET
module.exports.getBucketURL = () => S3_Config.BUCKET_URL

require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    mongodb: {
        URI: process.env.MONGO_URI || 'mongodb://localhost:27017/upskillie-test',
    },
    S3: {
        ACCESS_KEY:  process.env.S3_ACCESS_KEY,
        SECRET_KEY: process.env.S3_SECRET_KEY,
        BUCKET: process.env.S3_BUCKET
    }

};

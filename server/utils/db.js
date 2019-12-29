const mongoose = require('mongoose');
const { mongodb: mongoConfig } = require('config');

module.exports.getMongoURI = () => {
    return mongoConfig.URI
};

module.exports.setDBListeners = () => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log("connected successfully")
    });
};
const mongoose = require('mongoose');
const mongooseAlgolia = require('mongoose-algolia');
const  { ALGOLIA : algoliaConfig}= require('config')
const {buildImageURL} = require('utils/s3')

const imageSchema = new mongoose.Schema({
  key: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  text: {
    type: 'String',
    required: true,
    trim: true,
  }
});

imageSchema.plugin(mongooseAlgolia, {
  appId: algoliaConfig.ID,
  apiKey: algoliaConfig.KEY,
  selector: 'text key url',
  indexName: 'upskillie',
  defaults: {
    text: ''
  },
  virtuals: {
    url: function(img) {
      return buildImageURL(img.key)
    }
  },
  // filter: function(image) {
  //   return image.text.length < 100
  // },
})
const ImageModel = mongoose.model('Image', imageSchema);

ImageModel.SyncToAlgolia();
ImageModel.SetAlgoliaSettings({
  searchableAttributes: ['text'] //Sets the settings for this schema, see [Algolia's Index settings parameters](https://www.algolia.com/doc/api-client/javascript/settings#set-settings) for more info.
});
module.exports = ImageModel
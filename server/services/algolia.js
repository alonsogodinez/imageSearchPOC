const algoliasearch = require('algoliasearch');
const {ALGOLIA: algoliaConfig} = require('config')
const client = algoliasearch(algoliaConfig.ID, algoliaConfig.KEY);
const index = client.initIndex(algoliaConfig.INDEX);

module.exports.search = async (searchText) => {
  return await index.search(searchText)
}
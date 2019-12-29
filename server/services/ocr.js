const { createWorker } = require('tesseract.js')

module.exports.recognize = async({ url, language = 'eng' }) => {
  const worker = createWorker()
  await worker.load();
  await worker.loadLanguage(language);
  await worker.initialize(language);
  const { data: { text } } = await worker.recognize(url);
  await worker.terminate();
  return text
}





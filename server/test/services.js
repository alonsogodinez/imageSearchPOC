const ocrService = require('services/ocr')
const algoliaService = require('services/algolia')
const { assert, expect } = require('chai');
const path = require('path');

describe("Services", () => {
  describe("OCR", () => {
    it('should parse text inside an image',  (done) => {
      ocrService.recognize({url: path.join(__dirname, '/test_images', 'download.png')})
        .then(text => assert.isString(text))
        .catch(done)
        .then(done)
    });

    it('should throws error if empty URL is given',(done) => {
      ocrService.recognize({url: ""})
        .then(done)
        .catch(err => {
          assert.instanceOf(err, Error)
          done()
        })
    });

    it('should throw error if no object param is given',(done) => {
      ocrService.recognize()
        .then(done)
        .catch(err => {
          assert.instanceOf(err, Error)
          done()
        })
    });
  })

  describe("ALGOLIA", () => {

    //seed data

    //
    it('should return indexed images that has OCR text in it',  (done) => {
      algoliaService.search("ocr")
        .then(({hits}) => {
          expect(hits).to.be.an('array')
          if(hits.length === 0) {
            done()
          } else {

            const hasOcrInIt = txt => txt.toLowerCase().indexOf('ocr') > -1
            expect(hits.every(hit => hasOcrInIt(hit.text))).to.be.true
            done()
          }
        })
        .catch(done)
    });

  })

  describe("S3", () => {

    it('should upload multiple files to the Bucket',  (done) => {
      done()
    });

  })
})

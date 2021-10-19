const Item = require('../src/item.js')

describe('Item', function() {
  let item

  beforeEach(function() {
    item = new Item(2)
  })

  describe('properties', function() {
    it('has a price', function() {
      expect(item.price).toEqual(2)
    })
  })
})

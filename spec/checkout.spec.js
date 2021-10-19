const Checkout = require('../src/checkout.js')
// you should be able to delete the line below when Checkout is properly isolated
const Item = require('../src/item.js')

describe('Checkout', function() {
  let items, checkout

  beforeEach(function() {
    items = [
      new Item(1),
      new Item(2),
      new Item(2),
    ]
    checkout = new Checkout(items)
  })

  describe('total()', function() {
    it('returns items total', function() {
      expect(checkout.total()).toEqual(5)
    })
  })

  describe('printReceipt()', function() {
    it('returns items total', function() {
      expect(checkout.printReceipt()).toEqual('Your total is 5. Thanks for shopping!')
    })
  })
})

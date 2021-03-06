const Checkout = require('../src/checkout.js')

class ReceiptCopy {
  print() {
    return `You have a receipt`
  }
}

describe('Checkout', function () {
  let items, checkout

  beforeEach(function () {
    items = [
      { price: 1 },
      { price: 2 },
      { price: 2 },
    ]
    
    checkout = new Checkout(items);

  })

  describe('total()', function () {
    it('returns items total', function () {
      expect(checkout.total()).toEqual(5)
    })
  })

  describe('printReceipt()', function () {
    it('returns items total', function () {
      expect(checkout.printReceipt(ReceiptCopy)).toEqual('You have a receipt')
    })
  })
})

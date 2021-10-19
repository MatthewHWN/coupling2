const Checkout = require('../src/checkout.js')

describe('Checkout', function() {
  let items, checkout, receipt

  beforeEach(function() {
    items = [
      { price: 1 },
      { price: 2 },
      { price: 2 },
    ]
    checkout = new Checkout(items)
  })

  describe('total()', function() {
    it('returns items total', function() {
      expect(checkout.total()).toEqual(5)
    })
  })

  describe('printReceipt()', function() {
    beforeEach(function() {
      receipt = { print() {} }
      spyOn(receipt, 'print').and.returnValue("a receipt")
    })

    it('calls receipts print method', function() {
      expect(checkout.printReceipt(receipt)).toEqual("a receipt")
    })

    it('calls receipts print method with right argument', function() {
      checkout.printReceipt(receipt)

      expect(receipt.print).toHaveBeenCalledWith(5);
    })
  })
})

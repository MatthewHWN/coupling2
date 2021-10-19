const Checkout = require('../src/checkout.js')
const Receipt = require('../src/receipt.js')
// you should be able to delete the line below when Checkout is properly isolated

// class TestItem {
//   constructor(price) {
//     this.price = price;
//   }
// }
// let checkout = new Checkout();



describe('Checkout', function () {
  let items, checkout

  beforeEach(function () {
    // items = [
    //   new TestItem(1),
    //   new TestItem(1),
    //   new TestItem(1),
    // ]
    items = [
      { price: 1 },
      { price: 2 },
      { price: 2 },
    ]
    checkout = new Checkout(items)
    receiptObj = new Receipt(checkout.total());

  })

  describe('total()', function () {
    it('returns items total', function () {
      expect(checkout.total()).toEqual(5)
    })
  })

  describe('printReceipt()', function () {
    it('returns items total', function () {
      expect(checkout.printReceipt(receiptObj)).toEqual('Your total is 5. Thanks for shopping!')
    })
  })
})

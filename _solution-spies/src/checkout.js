const Receipt = require('./receipt.js')

class Checkout {
  constructor(items) {
    this.items = items
  }

  total() {
    return this.items.reduce((a, b) => a + b.price, 0)
  }

  printReceipt(receipt) {
    return receipt.print(this.total())
  }
}

module.exports = Checkout

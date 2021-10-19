// const Receipt = require('./receipt.js')

class Checkout {
  constructor(items) {
    this.items = items;
  }

  total() {
    // items = [{ price: 1}, {price: 2}, {price: 3}]
    return this.items.reduce((a, b) => a + b.price, 0)
  }

  printReceipt(receiptClass) {
    const receipt = new receiptClass(this.total())
    return receipt.print();
  }
}
// old code
// let receipt = new Receipt(this.total());


module.exports = Checkout

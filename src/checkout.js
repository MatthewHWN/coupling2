const Receipt = require('./receipt.js')

class Checkout {
  constructor(items) {
    this.items = items;
  }

  total() {
    // items = [{ price: 1}, {price: 2}, {price: 3}]
    return this.items.reduce((a, b) => a + b.price, 0)
  }

  printReceipt(receiptObj) {
    // Move the pointer to the dependency from the function body to outside the class or as a default method argument
    // const receipt = new Receipt(this.total())

    return receiptObj.print();
  }
}
// old code
// let receipt = new Receipt(this.total());


module.exports = Checkout

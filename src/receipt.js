class Receipt {
  constructor(total) {
    this.total = total
  }

  print() {
    return `Your total is ${this.total}. Thanks for shopping!`
  }
}

module.exports = Receipt

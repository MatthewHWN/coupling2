const Receipt = require('../src/receipt.js')

describe('Receipt', function () {
  let receipt

  beforeEach(function () {
    receipt = new Receipt(4)
  })

  describe('print()', function () {
    it('returns receipt statement', function () {
      expect(receipt.print()).toEqual('Your total is 4. Thanks for shopping!')
    })
  })
})

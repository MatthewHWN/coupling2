const TruthTeller = require('../src/truth-teller.js')

describe('TruthTeller', function() {
  let truthTeller

  beforeEach(function() {
    truthTeller = new TruthTeller()
  })

  describe('guess()', function() {
    it('returns true', function() {
      const mathDouble = {
        random() { return 0.7 }
      }
      expect(truthTeller.guess(mathDouble)).toEqual(true)
    })

    it('returns false', function() {
      const mathDouble = {
        random() { return 0.3 }
      }
      expect(truthTeller.guess(mathDouble)).toEqual(false)
    })
  })
})

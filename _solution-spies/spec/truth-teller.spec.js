const TruthTeller = require('../src/truth-teller.js')

describe('TruthTeller', function() {
  let truthTeller

  beforeEach(function() {
    truthTeller = new TruthTeller()
  })

  // this approach doesn't decouple TruthTeller from Math
  // instead, it overrides the #random() method to return a specified value
  describe('guess()', function() {
    it('returns true', function() {
      spyOn(Math, 'random').and.returnValue(0.7);

      expect(truthTeller.guess()).toEqual(true)
    })

    it('returns false', function() {
      spyOn(Math, 'random').and.returnValue(0.3);

      expect(truthTeller.guess()).toEqual(false)
    })
  })
})

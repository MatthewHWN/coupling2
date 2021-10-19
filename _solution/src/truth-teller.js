class TruthTeller {
  guess(math = Math) {
    return math.random() > 0.5
  }
}

module.exports = TruthTeller


var stuff = require('./index.js')

describe('Index', () => {
  it('does a thing', () => {
    var expected = stuff()
    expect(expected).toBe(2)
  })
})
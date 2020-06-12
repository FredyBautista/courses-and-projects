var helloWorld = require('./index')

describe('Testing hello world', function () {
  it('should return hello world', function () {
    expect(helloWorld('Fredy')).toBe('Hello Fredy')
  })
})

const inspect = require('inspect.js')
describe('FireTest', () => {
  it ('loads tests from a .js file', () => {
    inspect('foo').isString()
  })
})

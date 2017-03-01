'use strict'

const strclass = require('./src')

console.assert(typeof strclass === 'function', 'strclass should be a function')

console.assert(
  strclass({ active: true }) === 'active',
  'strclass({ active: true }) should return "active"'
)

console.assert(
  strclass({ active: false }) === '',
  'strclass({ active: false }) should return a blank string ""'
)

console.assert(
  strclass({ active: false }, 'container') === 'container',
  'strclass({ active: false }, "container") should return "container"'
)

console.assert(
  strclass({ active: true }, 'button', null) === 'button active',
  'strclass({ active: true }, "button", null) should return "button active"'
)

console.log('All tests passed!')

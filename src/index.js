;(function (root, moduleName, factory) {
  'use strict'
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) define(moduleName, factory)
  else if (typeof exports === 'object') exports = module.exports = factory()
  else root[moduleName] = factory()
})(this, 'strclass', function () {
  'use strict'

  function strclass (rules) {
    var classes = Array.prototype.slice.call(arguments, 1)

    function objectToString (acc, rule) {
      return acc + (rules[rule] ? ' ' + rule : '')
    }

    return Object.keys(rules)
      .reduce(objectToString, classes.filter(Boolean).join(' '))
      .replace(/^\s+|\s+$/g, '')
  }

  return strclass
})

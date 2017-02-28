;(function (root, moduleName, factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    define(moduleName, factory)
  } else if (typeof exports === 'object') {
    exports = module.exports = factory()
  } else {
    root[moduleName] = factory()
  }
})(this, 'strclass', function () {
  'use strict'

  function strclass () {
    var rules = arguments[0]
    var classes = Array.prototype.slice.call(arguments, 1)

    function reduceObjectToString (acc, rule) {
      return acc + (rules[rule] ? ' ' + rule : '')
    }

    function isTruthy (v) {
      return !!v
    }

    return Object.keys(rules).reduce(
      reduceObjectToString,
      classes.filter(isTruthy).join(' ')
    )
    .replace(/^\s+|\s+$/, '')
  }

  return strclass
})

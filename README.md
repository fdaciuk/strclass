# strclass

> A tiny library to apply CSS classes as strings from objects

[![Build Status][travis-image]][travis-url]
[![Coveralls Coverage Status][coverage-image]][coverage-url]

## Installation

```
yarn add strclass
```

## Usage

`strclass` is an _Universal Module_, and can be used as a global,
with AMD, CommonJS or ES Module.

**Signature:**

```
strclass({ className: booleanConditionToShowThisClass }, [defaultClass1, defaultclass2, ..., defaultclassN])
```

**Usage:**

```js
import strclass from 'strclass'

console.log(strclass({ highlighted: true }))
// 'highlighted'

console.log(strclass({ '-active': true }, 'button'))
// 'button -active'

console.log(strclass({ '-active': true }, 'button', 'button-default'))
// 'button button-default -active'

console.log(strclass({ active: false }))
// ''
```

You can use with React, VanillaJS or any other lib/framework:

```js
const Button = ({ active, children }) => (
  <button className={strclass({ active }, 'button')}>
    {children}
  </button>
)

<Button active>Click!</Button>
// will render: <button class="button active">Click!</button>

<Button active={false}>Click!</Button>
// will render: <button class="button">Click!</button>
```

If you are using _CSS Modules_, or need to pass the class as a dynamic value, just do:

```js
const ac = 'active'
console.log(strclass({ [ac]: true })) // 'active'
```

## Differences from [`classnames module`](https://github.com/JedWatson/classnames)

**Size**

`strclass` has ~200bytes gzipped.

**Signature**

With `classnames`, you can pass any argument as `String`, `Object` or `Array`.
Otherwise, `strclass` has a signature that should be respected: `Object` as a first argument, with the conditionals,
and any other argument should be a `String`.

If you don't need conditionals, you don't need `strclass`. Just use `strings`.

That's it =)

## License

[MIT](license-url) &copy; Fernando Daciuk

[travis-image]: https://img.shields.io/travis/fdaciuk/strclass.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/strclass
[coverage-image]: https://img.shields.io/coveralls/fdaciuk/strclass/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/fdaciuk/strclass?branch=master
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md

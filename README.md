# strclass

> Change objects to strings CSS classes

[![Build Status][travis-image]][travis-url]

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

## License

[MIT](license-url) &copy; Fernando Daciuk

[travis-image]: https://img.shields.io/travis/fdaciuk/strclass.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/strclass
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md

# strclass

> Change objects to strings CSS classes

## Installation

```
yarn add strclass
```

## Usage

`strclass` is an _Universal Module_, and can be used as a global,
with AMD, CommonJS or ES Module.

```js
import strclass from 'strclass'

console.log(strclass({ active: true })) // 'active'

console.log(strclass({ '-active': true }, 'button')) // 'button -active'
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
```

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk

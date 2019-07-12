# templatestringparser
A package that helps you process template strings against values

## Features
- optional configuration of *openingbracket* and *closingbracket*
- supports single and multiple brackets like `{name}` `{{ name }}` `${name}` `$(name)` `<name>` `<name/>` `<>name</>` etc
- auto trim excess white space between key value and brackets

## Usage
First, install the package using npm:
```
npm install -S templatestringparser
```
or
```
yarn add templatestringparser
```

Package can be used like so:

### REPL
```shell
$ npm install templatestring
$ node
```
```javascript
> console.log(require('templatestringparser')('Hi {name}, Welcome!', {name: 'Dave'}));
Hi Dave, Welcome!
```

### es5
```javascript
var templateParser = require('templatestringparser')

var template = 'Hello {name}, welcome to my Platform!'
console.log(templateParser(template, { name: 'Dave' })) // Hello Dave, Welcome to my Platform!
```

### es6 and later
```javascript
import templatestringparser as templateParser from 'templatestringparser'

const template = 'Hello {name}, welcome to my Platform!'
console.log(templateParser(template, { name: 'Dave' })) // Hello Dave, Welcome to my Platform!
```

### Configurations

#### 1 openingbracket and closingbracket

By default *templatestringparser* uses single curly brackets<br />
`{` as openingbracket and<br />
`}` as closingbracket.

To override the default behavior, pass a 3rd argument of OBJECT TYPE specifying the *openingbracket* and *closingbracket*

```javascript
import templatestringparser as tsp from 'templatestringparser'

var template = 'Hello ${name}, welcome to my Platform!'

var strObj = {
  name: 'Dave'
}

var config = {
  openingbracket: '${', // some common examples '{','{{','(','<','<>'
  closingbracket: '}' // some common examples '}','}}',')','>','/>','</>'
}

console.log(tsp(template, strObj, config)) // Hello Dave, Welcome to my Platform!
```

#### 2 trim

The `trim` configuration will trim excess white space between key value and brackets.<br />
This is enabled by default. Use `{trim: false}` in configuration to disable auto trimming.

```javascript
import templatestringparser as tsp from 'templatestringparser'

var template = 'Hello {    name  }, welcome to my { space }!'

var strObj = {
  name: 'Dave',
  space: 'World'
}

var config = {
  trim: true
}

console.log(tsp(template, strObj, config)) // Hello Dave, Welcome to my World!
```

Keeping up to date
------------------
- [Follow me on Twitter](https://twitter.com/ajalaabdulsamii) for updates: [https://twitter.com/ajalaabdulsamii](https://twitter.com/ajalaabdulsamii)

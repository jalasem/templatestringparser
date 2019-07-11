# templateString
A package that helps you process template strings against values

## Why you should use *templatestringparser*
- optional configuration of *openingbracket* and *closingbracket*
- supports single and multiple brackets like `{name}` `{{name}}` `${name}` `$(name)` etc

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

#### openingbracket and closingbracket

By default *templatestringparser* uses single curly brackets
`{` as openingbracket and
`}` as closingbracket.

To override the default behavior, pass a 3rd argument of OBJECT TYPE specifying the *openingbracket* and *closingbracket*

```javascript
import templatestringparser as tsp from 'templatestringparser'

var template = 'Hello (name), welcome to my Platform!'

var strObj = {
  name: 'Dave'
}

var config = {
  openingbracket: '(',
  closingbracket: ')'
}

console.log(tsp(template, strObj, config)) // Hello Dave, Welcome to my Platform!
```

Keeping up to date
------------------
- [Follow me on Twitter](https://twitter.com/ajalaabdulsamii) for updates: [https://twitter.com/ajalaabdulsamii](https://twitter.com/ajalaabdulsamii)

# templateString
A package that helps you process template strings

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

Keeping up to date
------------------
- [Follow me on Twitter](https://twitter.com/ajalaabdulsamii) for updates: [https://twitter.com/ajalaabdulsamii](https://twitter.com/ajalaabdulsamii)

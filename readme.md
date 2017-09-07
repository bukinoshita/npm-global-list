# npm-global-list [![Build Status](https://travis-ci.org/bukinoshita/npm-global-list.svg?branch=master)](https://travis-ci.org/bukinoshita/npm-global-list)

> Get all npm packages installed globally


## Install

```bash
$ yarn add npm-global-list
```


## Usage

```js
const npmGlobalList = require('npm-global-list')

npmGlobalList().then(pkgs => console.log(pkgs))
// => ['list', 'of', 'globally', 'installed', 'packages', ...]
```


## API

### npmGlobalList()

Returns a `promise`


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)

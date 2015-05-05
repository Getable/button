# button [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

button ui piece

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S @getable/button
```


## Usage

```js
var Button = require('@getable/button')

new Button(
    classes: ['button-cta']
  , text: 'Click me'
  , onClick: function(){
      window.alert('You\'ve won $500! Click here to claim your prize!')
    }
)
```

## Options

### `<Array> classes`
An array of classes to be applied to the button. The base class `button` is always applied by default.

### `<String> text`
The text label that shows on the button.

### `<Function> onClick`
The function that gets called when the button is clicked.

## Methods
None yet

## Events
None yet

## Tests
Tests are in [tape](https://github.com/substack/tape).


* `npm test` will run the tests in a browser
* `npm run tdd` will run the tests in a browser on every file change.


## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Cristi Scheye]()


[npm-url]: https://npmjs.org/package/@getable/button
[npm-image]: https://badge.fury.io/js/@getable/button.svg
[travis-url]: https://travis-ci.org/Getable/@getable/button
[travis-image]: https://travis-ci.org/Getable/@getable/button.svg?branch=master
[daviddm-url]: https://david-dm.org/Getable/@getable/button.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/Getable/@getable/button

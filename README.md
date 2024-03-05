# raf scroll
![tests](https://github.com/bicycle-codes/raf-scroll/actions/workflows/nodejs.yml/badge.svg)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![types](https://img.shields.io/npm/types/@bicycle-codes/raf-scroll?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Scroll events, debounced with `requestAnimationFrame`.

## install
```sh
npm i -S @bicycle-codes/raf-scroll
```

## example
```js
import { rafScroll } from '@bicycle-codes/raf-scroll'

rafScroll(ev => {
    // this is called at most once per animation frame
    console.log('scroll event', ev)
})
```

### use minified scripts

```js
import { rafScroll } from '@bicycle-codes/raf-scroll/min'
```

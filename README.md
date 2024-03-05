# raf scroll
![tests](https://github.com/nichoth/raf-scroll/actions/workflows/nodejs.yml/badge.svg)
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

rafScroll.add(ev => {
    // this will be called at most once
    // per animation frame
    console.log('scroll event', ev)
})
```

# raf scroll
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/raf-scroll/nodejs.yml?style=flat-square)](https://github.com/substrate-system/raf-scroll/actions/workflows/nodejs.yml)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![types](https://img.shields.io/npm/types/@substrate-system/raf-scroll?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/raf-scroll?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/raf-scroll)
[![gzip size](https://img.shields.io/bundlephobia/minzip/@substrate-system/raf-scroll?style=flat-square)](https://bundlephobia.com/package/@substrate-system/raf-scroll)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)

Scroll events, debounced with `requestAnimationFrame`.

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## Install
```sh
npm i -S @substrate-system/raf-scroll
```

## Example

```js
import { rafScroll } from '@substrate-system/raf-scroll'

rafScroll(ev => {
    // this is called at most once per animation frame
    console.log('scroll event', ev)
})
```

## Modules

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### Bundler

Import like normal.

```js
import { rafScroll } from '@substrate-system/raf-scroll'
```

### Minified

This package exposes minified JS too. Copy to a location that is
accessible to your web server, then link to it in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/raf-scroll/dist/index.min.js ./public/raf-scroll.min.js
```

#### HTML
```html
<script type="module" src="./raf-scroll.min.js"></script>
```


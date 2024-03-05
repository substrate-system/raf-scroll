import { rafScroll } from '../src/index.js'
import './style.css'

rafScroll(ev => {
    console.log('scroll event', ev)
})

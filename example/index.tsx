import { rafScroll } from '../src/index.js'
import './style.css'

rafScroll.add(ev => {
    console.log('scroll event', ev)
})

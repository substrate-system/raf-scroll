import { rafScroll } from '../src/index.js'
import './style.css'

rafScroll((ev:number) => {
    console.log('scroll event', ev)
})

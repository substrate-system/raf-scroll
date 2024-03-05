import { Bus } from '@nichoth/events'
const emitter = new Bus()

let rafId = -1
let scrollY = 0
let deltaY = 0
let ticking = false

const raf = window.requestAnimationFrame

export const rafScroll = {
    add: function (fn) {
        const off = emitter.on('scroll', fn)

        // Start raf on first callback
        rafId = raf(update)

        return () => {
            off()
            window.cancelAnimationFrame(rafId)
        }
    },

    addOnce: function (fn) {
        const off = emitter.on('scroll', (ev) => {
            fn(ev)
            off()
        })

        // Start raf on first callback
        rafId = raf(update)
    },

    getCurrent: function () {
        return getEvent()
    }
}

function getEvent () {
    const scroll = document.documentElement.scrollTop

    if (ticking) {
        deltaY = scroll - scrollY
    }

    scrollY = scroll

    return {
        scrollY,
        deltaY
    }
}

function update () {
    rafId = raf(update)

    ticking = true
    emitter.emit('scroll', getEvent())
    ticking = false
}

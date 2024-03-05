let lastKnownScrollPosition = 0
let ticking = false

interface Unsubscribe {
    ():void
}

export const rafScroll = function rafScroll (
    cb:(scrollY:number)=>any
):Unsubscribe {
    document.addEventListener('scroll', onScroll)

    function onScroll () {
        lastKnownScrollPosition = window.scrollY

        if (!ticking) {
            window.requestAnimationFrame(() => {
                cb(lastKnownScrollPosition)
                ticking = false
            })

            ticking = true
        }
    }

    return function Unsubscribe () {
        document.removeEventListener('scroll', onScroll)
    }
}

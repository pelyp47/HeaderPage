const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")

let menuStatus = "hidden"



const menuTimeline_hidden = gsap.timeline({
    paused: true,
    autoKill: false,
    onComplete: ()=>{
        menuStatus = "active"
    }
})
const menuTimeline_active = gsap.timeline({
    paused: true,
    autoKill: false,
    onComplete: ()=>{
        menuStatus = "hidden"
    }
})

const menuAnimationReducer ={
    "hidden": menuTimeline_hidden,
    "active": menuTimeline_active
}

menuTimeline_hidden.to(".menu-btn__stripe:nth-of-type(2)", {x: 10, opacity: 0, duration: .5})
                   .to(".menu-btn__stripe:nth-of-type(1)", {y: 5, duration: .5, ease: "power4"}, "-=0.1")
                   .to(".menu-btn__stripe:nth-of-type(3)", {y: -5, duration: .5, ease: "power4"}, "<")
                   .to(".menu", {width: "100%", height: "100%", duration: .55}, "-=0.1")
                   .from(".menu__list-item", {x: -40, opacity: 0, duration: .5, stagger: .1}, "-=0.1")
                   .to(".menu-btn__stripe:nth-of-type(1)", {rotate: 45, duration: .5, ease: "power4"}, "-=0.45")
                   .to(".menu-btn__stripe:nth-of-type(3)", {rotate: -45, duration: .5, ease: "power4"}, "<")

menuTimeline_active.to(".menu__list-item", {x: 40, opacity: 0, duration: .5, stagger: .1})
                   .to(".menu", {width: 0, height: 0, duration: .55})
                   .to(".menu-btn__stripe:nth-of-type(1)", {rotate: 0, duration: .5, ease: "power4"}, "-=0.3")
                   .to(".menu-btn__stripe:nth-of-type(3)", {rotate: 0, duration: .5, ease: "power4"}, "<")
                   .to(".menu-btn__stripe:nth-of-type(2)", {x: 0, opacity: 1, duration: 0})
                   .to(".menu-btn__stripe:nth-of-type(1)", {y: 0, duration: .5, ease: "power4"})
                   .to(".menu-btn__stripe:nth-of-type(3)", {y: 0, duration: .5, ease: "power4"}, "<")

menuBtn.addEventListener("click", (event)=>{
    menuAnimationReducer[menuStatus].restart()
})

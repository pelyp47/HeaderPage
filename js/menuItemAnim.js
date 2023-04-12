let menuItems = document.querySelectorAll(".menu__list-item")

menuItems.forEach((el)=>{
    let pseudoElementTop = document.createElement("div")
    pseudoElementTop.style.content = ""
    pseudoElementTop.style.position = "absolute";
    pseudoElementTop.style.width = "0%";
    pseudoElementTop.style.height = "1px";
    pseudoElementTop.style.backgroundColor = "#fff";
    pseudoElementTop.style.top = "0";
    pseudoElementTop.style.pointerEvents = "none"
    el.appendChild(pseudoElementTop)

    let pseudoElementRight = document.createElement("div")
    pseudoElementRight.style.content = ""
    pseudoElementRight.style.position = "absolute";
    pseudoElementRight.style.width = "1px";
    pseudoElementRight.style.height = "0%";
    pseudoElementRight.style.backgroundColor = "#fff";
    pseudoElementRight.style.right = "0";
    pseudoElementRight.style.pointerEvents = "none"
    el.appendChild(pseudoElementRight)

    let pseudoElementLeft = document.createElement("div")
    pseudoElementLeft.style.content = ""
    pseudoElementLeft.style.position = "absolute";
    pseudoElementLeft.style.width = "1px";
    pseudoElementLeft.style.height = "0%";
    pseudoElementLeft.style.backgroundColor = "#fff";
    pseudoElementLeft.style.left = "0";
    pseudoElementLeft.style.pointerEvents = "none"
    el.appendChild(pseudoElementLeft)

    let pseudoElementBottom = document.createElement("div")
    pseudoElementBottom.style.content = ""
    pseudoElementBottom.style.position = "absolute";
    pseudoElementBottom.style.width = "0%";
    pseudoElementBottom.style.height = "1px";
    pseudoElementBottom.style.backgroundColor = "#fff";
    pseudoElementBottom.style.bottom = "0";
    pseudoElementBottom.style.pointerEvents = "none"
    el.appendChild(pseudoElementBottom)

    const pseudoElementTopTimeline = gsap.timeline({
        autoKill: true
    })
    const pseudoElementRightTimeline = gsap.timeline({
        autoKill: true
    })
    const pseudoElementLeftTimeline = gsap.timeline({
        autoKill: true
    })
    const pseudoElementBottomTimeline = gsap.timeline({
        autoKill: true
    })

    el.querySelector(".menu__link").addEventListener("mouseout", (event)=>{
        if (event.target.tagName === 'DIV') {
            return;
        }

        pseudoElementTopTimeline.add(gsap.to(pseudoElementTop, {
            width: "0%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementTop, {clearProps: "right"})
                gsap.set(pseudoElementTop, {left: 0})
            }
        }))
        
        pseudoElementRightTimeline.add(gsap.to(pseudoElementRight, {
            height: "0%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementRight, {clearProps: "bottom"})
                gsap.set(pseudoElementRight, {top: 0})
            }
        }))

        pseudoElementLeftTimeline.add(gsap.to(pseudoElementLeft, {
            height: "0%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementLeft, {clearProps: "top"})
                gsap.set(pseudoElementLeft, {bottom: 0})
            }
        }))

        pseudoElementBottomTimeline.add(gsap.to(pseudoElementBottom, {
            width: "0%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementBottom, {clearProps: "left"})
                gsap.set(pseudoElementBottom, {right: 0})
            }
        }))
    })

    el.querySelector(".menu__link").addEventListener("mouseover", (event)=>{
        if (event.target.tagName === 'DIV') {
            return;
        }

        pseudoElementTopTimeline.add(gsap.to(pseudoElementTop, {
            width: "100%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementTop, {clearProps: "left"})
                gsap.set(pseudoElementTop, {right: 0})
            }
        }))

        pseudoElementRightTimeline.add(gsap.to(pseudoElementRight, {
            height: "100%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementRight, {clearProps: "top"})
                gsap.set(pseudoElementRight, {bottom: 0})
            }
        }))

        pseudoElementLeftTimeline.add(gsap.to(pseudoElementLeft, {
            height: "100%",
            duration: .3,
            onStart: function(){
                gsap.set(pseudoElementLeft, {clearProps: "bottom"})
                gsap.set(pseudoElementLeft, {top: 0})
            }
        }))

        pseudoElementBottomTimeline.add(gsap.to(pseudoElementBottom, {
            width: "100%",
            duration: .3, 
            onStart: function(){
                gsap.set(pseudoElementBottom, {clearProps: "right"})
                gsap.set(pseudoElementBottom, {left: 0})
            }
        }))
    })
})
let menuItems = document.querySelectorAll(".menu__list-item")

menuItems.forEach((el)=>{
    let pseudoElement = document.createElement("div")
    pseudoElement.style.content = ""
    pseudoElement.style.position = "absolute";
    pseudoElement.style.width = "0%";
    pseudoElement.style.height = "1px";
    pseudoElement.style.backgroundColor = "#fff";
    pseudoElement.style.bottom = "0";
    pseudoElement.style.pointerEvents = "none"
    

    el.appendChild(pseudoElement)

    const pseudoElementTimeline = gsap.timeline({
        autoKill: true
    })
    
    el.addEventListener("mouseout", (event)=>{
        if (event.target.tagName === 'DIV') {
            return;
        }
        pseudoElementTimeline.add(gsap.to(el.querySelector("div"), {
            width: "0%",
            right: 0,
            duration: .3,
            onComplete: function(){
                gsap.set(el.querySelector("div"), {clearProps: "right"})
            }
        }))
    })

    el.addEventListener("mouseover", (event)=>{
        if (event.target.tagName === 'DIV') {
            return;
        }
        pseudoElementTimeline.add(gsap.to(el.querySelector("div"), {
            width: "100%",
            left: 0, 
            duration: .3, 
            onComplete: function(){
                gsap.set(el.querySelector("div"), {clearProps: "left"})
            }
        }))
    })
})
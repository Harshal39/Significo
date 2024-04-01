function homepageAnimation(){
    gsap.set(".slidesm", {scale: 3})

var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:3 
    }
})

t1.to(".video-div",{
    '--clip':"0%",
    ease: Power2,
},'a')
.to(".slidesm",{
    scale: 1,
    ease: Power2
},'a')
.to(".slidesm",{
    scale: 1,
    ease: Power2
},'a')
.to(".lft",{
    xPercent: -10,
    stagger: .03,
    ease: Power4
},'b')
.to(".rgt",{
    xPercent: 10,
    stagger: .03,
    ease: Power4
},'b')
}

function realPageAnimation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power2
    })
}


function paraAnimation(){
    var clutter = ""
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span", {
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub:0.2,
        
    },
    opacity: 1,
    stagger: .03,
    ease: Power4,
})
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function bodyColorChange(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
    })
})
}

loco();
paraAnimation();
realPageAnimation();
homepageAnimation();
capsulesAnimation();
bodyColorChange();
import gsap from "gsap"

const tl = gsap.timeline();

export const animation = () => {
    tl.to(".text", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
    })
    tl.from(".text span", {
        y: 100,
        stagger: 0.5,
        rotate: 20,
        duration: .8,
        opacity: 1,
        ease: "Power4.out",
    })
    tl.to(".text span", {
        y: 150,
        stagger: 0.5,
        rotate: -40,
        duration: 1,
        transformOrigin: 'bottom left',
        delay: 0.2
    })
    tl.to(".preloadercontainer", {
        y: 1000,
        duration: 1.5,
    })
    tl.to(".preloadercontainer", {
        delay: 1,
        opacity: 0,
    })
}
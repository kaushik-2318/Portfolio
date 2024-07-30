'use client'
import { useEffect, useRef } from "react";

import React from "react";
import gsap from "gsap"

function Magnetic({ children }) {

    const ref = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1,0.3)" })
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1,0.3)" })


        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
            // gsap.to(ref.current, { x: 0 })
            // gsap.to(ref.current, { y: 0 })
        }
        const mouseLeave = (e) => {
            xTo(0);
            yTo(0);
            // gsap.to(ref.current, { x: x })
            // gsap.to(ref.current, { y: y })
        }

        ref.current.addEventListener("mousemove", mouseMove)
        ref.current.addEventListener("mouseleave", mouseLeave)
        return () => {
            if (ref.current) {
                ref.current.removeEventListener("mousemove", mouseMove)
                ref.current.removeEventListener("mouseleave", mouseLeave)
            }
        }
    }, [])
    return (
        React.cloneElement(children, { ref })
    )
}

export default Magnetic

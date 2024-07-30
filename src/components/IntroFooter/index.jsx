import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";

export default function index() {
    useGSAP(() => {
        gsap.from(".main", {
            y: 50,
            delay: 4.5,
            duration: 1,
            ease: "back.out(4)"
        })
    })
    return (
        <div className="absolute font-Montserrat font-medium bottom-10 text-white flex items-center justify-between w-full px-14 overflow-hidden cursor-default">
            <div className='main text-base max-w-[400px] md:text-justify text-center'>
                Frontend Engineer currently available for work.
            </div>
            <div className='main md:block hidden text-base max-w-[400px] text-justify'>
                Focused on interfaces and experiences, working remotely from Bhubneswar, Odisha.
            </div>
        </div>
    )
}
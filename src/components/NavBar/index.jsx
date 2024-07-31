import Link from "next/link"

import Magnetic from '../Magnetic'

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";

export default function index() {
    useGSAP(() => {
        gsap.from(".btn", {
            y: 50,
            delay: 4.5,
            duration: 1,
            ease: "back.out(4)"
        })
    })
    return (
        <div className="absolute w-full md:pt-8 pt-7 p-3 md:p-4 md:px-10 font-MonaSans text-white">
            <div className="w-full flex item-center justify-between rounded-md p-1 text-sm md:p-2 overflow-hidden">
                <Magnetic>
                    <button className="btn border-2 rounded-lg p-2 cursor-default">
                        FullStack developer
                    </button>
                </Magnetic>
                <Magnetic>
                    <Link href="https://drive.google.com/file/d/19CYHl1YSPgS_pTlicT2MvM5SX8UpfwVP/view?usp=sharing" target='blank'>
                        <button className="btn border-2 rounded-lg p-2">
                            View Resume
                        </button>
                    </Link>
                </Magnetic>
            </div>
        </div>
    )
}
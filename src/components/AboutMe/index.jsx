import Image from "next/image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function index() {

    useGSAP(() => {
        gsap.from("h1", {
            x: -1000,
            duration: 1,
            scrollTrigger: {
                trigger: ".trigger",
                start: "top 70%",
                end: "top 70%",
                scroller: "body",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".word", {
            opacity: 0,
            y: 50,
            stagger: 0.04,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".trigger",
                start: "top 70%",
                end: "top 70%",
                scroller: "body",
                toggleActions: "play none none reverse",
            }
        });
    })

    const about1 = "Hey there!, I'm KAUSHIK VERMA software engineer based in INDIA, my passion lies in creating software that solves real-world problems and positively impacts people’s lives."
    const about2 = "Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations. Together let's create something technically BRILLIANT and creatively AESTHETIC."

    return (
        <>
            <div className="trigger cursor-default">
                <div className="bg-[#ebe4e4] flex p-[50px] justify-center overflow-hidden items-start mt-[5%] md:mx-[10%] rounded-3xl flex-col md:flex-row md:gap-40 gap-7 text-zinc-800">
                    <h1 className="font-Vonique text-center text-7xl md:text-8xl font-bold m-0 p-0 flex relative top-3">
                        ABOUT
                        <Image src="./svg/arrow-right-down-line.svg" alt="Arrow Right Down Line" width={30} height={10} priority className="relative top-3" />
                    </h1>
                    <p className="text-justify text-xl font-Montserrat font-medium">
                        {about1.split(" ").map((word, index) => (
                            <span key={index} className="word">{word + ' '}</span>
                        ))}
                        <br />
                        <br />
                        {about2.split(" ").map((word, index) => (
                            <span key={index} className="word">{word + ' '}</span>
                        ))}
                    </p>
                </div>
            </div>
        </>
    )
}
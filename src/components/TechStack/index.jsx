import { useEffect, useState } from "react";
import Image from "next/image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function index() {
  const [direction, setDirection] = useState({ text: "normal", image: "reverse" });

  const row1 = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React JS",
    "Next JS",
    "BootStrap",
    "C/C++",
    "Express",
    "GSAP",
    "JQuery",
    "JAVA",
    "Mongoose",
    "MongoDB",
    "Node JS",
  ]

  const row2 = [
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341893/bootstrap_b7hthv.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341906/c_oekkh7.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341906/css_o1fflm.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341907/express_hzxtnm.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341948/gsap_pdzvbd.svg",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341949/html_oh1ssq.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341949/jquery_qrezs5.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341949/js_mnixmw.webp",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341950/jsvs_apnn3j.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341950/mongoose_gwrobg.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341951/monogodb_slotph.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341951/next_frqvq0.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341952/node_vu59pt.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341892/react_oobqyp.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341892/tailwind_cuody4.png",
    "https://res.cloudinary.com/dococv5lg/image/upload/v1722341905/c_nxgxzw.png"
  ]
  useGSAP(() => {

    gsap.from(".animation", {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".trig",
        start: "top 70%",
        end: "top 70%",
        scroller: "body",
        toggleActions: "play none none reverse",
      }
    });
  })

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        setDirection({ text: "normal", image: "reverse" })
      }
      else {
        setDirection({ text: "reverse", image: "normal" })
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [])

  return (
    <div className="trig w-[100%] h-fit flex items-center justify-center flex-col py-10 md:py-24 text-zinc-800 cursor-default">
      <div className="animation font-Vonique mb-10 text-5xl md:text-8xl font-bold text-center">My TechStack</div>
      <div className="w-full flex justify-center items-center flex-col">
        <MarqueeAnimation row={row1} direction={direction.text} />
        <MarqueeAnimation row={row2} direction={direction.image} />
        <MarqueeAnimation row={row1} direction={direction.text} />
      </div>
    </div>
  )
}

const MarqueeAnimation = ({ row, direction }) => {
  return (
    <div className="sideblur flex w-[85%] select-none overflow-hidden">
      <MarqueeGroup row={row} direction={direction} />
      <MarqueeGroup row={row} direction={direction} />
    </div>
  )
}

const MarqueeGroup = ({ row, direction }) => {
  return (
    <div className={`${direction} flex items-center justify-around whitespace-nowrap shrink-0 gap-10 w-max p-6`}>
      {row.map((e, index) => (
        <div key={index} className="">
          {row[0].includes("cloudinary") ? <Image className="w-22 h-auto" width={80} height={80} src={e} alt="TechStack" /> : <div className="border-2 border-zinc-900 p-3 rounded-xl shadow-xl">{e}</div>}
        </div>
      ))}
    </div>
  )
}

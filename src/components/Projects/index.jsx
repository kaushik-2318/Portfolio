'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

import Magnetic from '../Magnetic';
import Projects from '../Project'

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)



const scaleAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%"
  },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0]
    }
  }
}

export default function index() {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  )
}

function MobileView() {
  return (
    <>
      <div className='lg:hidden h-full bg-black text-white flex justify-center items-center flex-col'>
        <div className="font-Vonique text-7xl tracking-wide py-10">PROJECT</div>
        <div className='flex justify-center items-start flex-col gap-10 px-5' >
          {
            Projects.map((project, index) => {
              return <Box detail={project.detail} src={project.src} index={index} title={project.title} key={index} />
            })
          }
        </div>
        <Link href='/work'>
          <button className='border-2 p-6 px-10 rounded-full my-10 transition ease-in-out' >
            More Work
          </button>
        </Link>
      </div>
    </>
  )
}

function Box({ detail, title, src }) {
  return (
    <>
      <div className='rounded-3xl px-7 border-2 flex gap-3 justify-center items-center bg-zinc-900 flex-col py-3'>
        <Image className='rounded-xl' src={`${src}`} width={400} height={0} alt="image" />
        <h2 className='text-[40px] w-full transition-all duration-[0.4s] font-medium font-Lora' >{title}</h2>
        <p className='transition-all duration-[0.4s] font-light text-justify font-Montserrat'>{detail}</p>
        <div className='w-full flex justify-start items-center gap-5'>
          <Link href='#'>
            <button className='px-4 py-2 border-2 rounded-full'>Visit</button>
          </Link>
          <Link href='#'>
            <button className='px-4 py-2 border-2 rounded-full'>Github</button>
          </Link>
        </div>
      </div>
    </>
  )
}

function DesktopView() {

  useGSAP(() => {
    gsap.from("main", {
      width: "70%",
      duration: 1,
      scrollTrigger: {
        trigger: "main",
        start: "top 90%",
        end: "top 90%",
        scroller: "body",
        toggleActions: "play none none reverse",
      }
    })
  })


  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={`hidden lg:flex items-center px-[100px] flex-col w-full bg-black text-white rounded-t-3xl cursor-default`}>
      <div className="font-Vonique text-8xl tracking-wide py-24">PROJECT</div>

      <div className={`max-w-[1400px] w-full flex flex-col items-center justify-center mb-[100px]`}>
        {
          Projects.map((project, index) => {
            return <Project detail={project.detail} index={index} title={project.title} manageModal={manageModal} key={index} link={project.link} />
          })
        }
      </div>

      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={`h-[350px] w-[400px] fixed top-[50%] left-[50%] bg-white pointer-events-none overflow-hidden z-30`}>
          <div style={{ top: index * -100 + "%" }} className={`h-full w-full relative transition-[top] duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]`}>
            {
              Projects.map((project, index) => {
                const { src, color } = project
                return <div className={`h-full w-full flex items-center justify-center`} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <Image className='h-auto' src={`${src}`} width={400} height={0} alt="image" /></div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={`w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white fixed z-30 flex items-center justify-center text-[14px] font-extrabold pointer-events-none`} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={`w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white fixed z-30 flex items-center justify-center text-[14px] font-normal pointer-events-none bg-transparent`} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Visit</motion.div>
      </>

      <Magnetic>
        <Link href='/work'>
          <button className='border-2 p-6 px-10 rounded-full mb-5 transition ease-in-out duration-500 hover:text-white hover:bg-[#455CE9]' >
            More Work
          </button>
        </Link>
      </Magnetic>
    </main>
  )
}
function Project({ index, title, manageModal, detail, link }) {

  return (
    <Link href={link} target='blank' onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={`flex w-full justify-between items-center px-[100px] py-[50px] transition-all duration-[0.2s] border-y-[rgb(201,201,201)] border-y border-solid group/x`}>
      <h2 className="text-[60px] font-medium font-Lora transition-all duration-[0.4s] text-6xl group-hover/x:-translate-x-5" >{title}</h2>
      <p className="transition-all duration-[0.4s] font-Montserrat font-normal w-96 text-justify group-hover/x:translate-x-5">{detail}</p>
    </Link>
  )
}

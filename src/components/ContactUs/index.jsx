'use client'
import { useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import emailjs from '@emailjs/browser';
import Magnetic from '../Magnetic';

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function index() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_fravbxe', 'template_jyh3bgx', form.current, {
                publicKey: 'KqqeFiUoznCXq5rzb',
            })
            .then(
                () => {
                    alert("Email Send");
                    document.getElementById("form").reset()
                },
                (error) => {
                    return alert('FAILED...', error.text);
                },
            );
    };

    useGSAP(() => {
        gsap.from(".touch", {
            x: -1000,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".touchtrigger",
                toggleActions: "play none none reverse",
                start: "top 90%",
                end: "bottom 90%",
                scrub: 3,
            }
        })
    })

    return (
        <>
            <div className='relative  w-full flex justify-center cursor-default'>
                <div className="h-full w-[80%] pb-10 items-center flex-col text-zinc-700">
                    <div className="touchtrigger w-full py-10 pb-2 md:pl-40 text-5xl md:text-7xl font-Decomart">
                        Let’s have a
                        <br />
                        Talk
                    </div>

                    <div className=" w-full flex justify-center mt-5 md:mt-0">
                        <div className="relative border-2 md:w-[90%] w-full">
                            <hr className="w-full border-2 border-zinc-600" />
                            <Magnetic>
                                <button onClick={sendEmail} className="touch bg-[#455CE9] font-Lora rounded-full absolute text-white p-8 md:p-9 -bottom-12 md:-bottom-16 right-2 md:right-10 text-lg">
                                    <div>Get in <br /> Touch</div>
                                </button>
                            </Magnetic>

                        </div>
                    </div>

                    <div className="flex h-max justify-center mt-20 items-center md:px-40 flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-max flex justify-center items-center flex-col">
                            <Image className="" width={400} height={96} src='./svg/aboutsvg.svg' alt="SVG" />
                            <p className="text-justify w-[80%] md:text-sm text-lg  font-semibold font-Decomart">
                                GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON SOMETHING
                                <br />
                                SEND ME AN EMAIL OR BOOK A CALL
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 font-Lora flex justify-center items-center">
                            <form ref={form} onSubmit={sendEmail} id='form' className='w-full'>
                                <div className="p-5">
                                    <div className="text-2xl mb-4">What's your name?</div>
                                    <input className="md:w-96 w-full outline-none bg-transparent border-b-2 border-zinc-500 p-2" type="text" name="name" placeholder="Kaushik Verma*" required />
                                </div>
                                <div className="p-5">
                                    <div className="text-2xl mb-4">What's your email?</div>
                                    <input className="md:w-96 w-full outline-none bg-transparent border-b-2 border-zinc-500 p-3" type="email" name="email" placeholder="kaushikverma321@gmail.com*" required />
                                </div>
                                <div className="pl-5 pt-5">
                                    <div className="text-2xl mb-4">Your Message</div>
                                    <textarea className="md:w-96 w-full bg-transparent p-3 border-2 border-zinc-500 rounded-2xl" name="message" rows={5} placeholder="Hi..." required></textarea>
                                </div>
                                <Magnetic>
                                    <button type='submit' className='border-2 border-zinc-800 p-4 rounded-xl ml-5 gap-3 mt-10 flex justify-center items-center'>
                                        <div className='text-xl'>Send</div>
                                    </button>
                                </Magnetic>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='absolute right-0 w-44 md:bottom-10 bottom-0 flex justify-start items-left md:gap-3 gap-0 text-left flex-col text-white overflow-x-hidden'>
                    <Link href='https://www.linkedin.com/in/kaushik-verma-2b5515254/' target='blank'>
                        <div className='flex items-center gap-5 md:hover:bg-[#1c1d20]  p-2 rounded-l-full relative translate-x-32 md:translate-x-28 md:hover:translate-x-0 md:duration-500 md:group/hh'>
                            <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-[#ebe4e4] flex justify-center items-center rounded-full'>
                                <Image className='md:group-hover/hh:rotate-[360deg] md:group-hover/hh:scale-75 md:duration-500' src="./svg/linkedin-box-fill.svg" width={45} height={45} alt='Linkedin' />
                            </div>
                            Linkedin
                        </div>
                    </Link>
                    <Link href='https://www.instagram.com/kaushikverma_19?igsh=d2Y2Y2JlcTU4eDJz' target='blank'>
                        <div className='flex items-center gap-5 md:hover:bg-[#1c1d20] p-2  rounded-l-full relative translate-x-32 md:translate-x-28 md:hover:translate-x-0 md:duration-500 md:group/hh'>
                            <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-[#ebe4e4] flex justify-center items-center rounded-full'>
                                <Image className='md:group-hover/hh:rotate-[360deg] md:group-hover/hh:scale-75 md:duration-500' src="./svg/instagram-fill.svg" width={45} height={45} alt='Instagram' />
                            </div>
                            Instagram
                        </div>
                    </Link>
                    <Link href='https://github.com/kaushik-2318' target='blank'>
                        <div className='flex items-center gap-5 md:hover:bg-[#1c1d20] p-2 rounded-l-full relative translate-x-32 md:translate-x-28 md:hover:translate-x-0 md:duration-500 md:group/hh'>
                            <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-[#ebe4e4] flex justify-center items-center rounded-full'>
                                <Image className='md:group-hover/hh:rotate-[360deg] md:group-hover/hh:scale-75 md:duration-500' src="./svg/github-fill.svg" width={45} height={45} alt='Github' />
                            </div>
                            Github
                        </div>
                    </Link>
                    <Link href='https://x.com/SilentK68296830' target='blank'>
                        <div className='flex items-center gap-5 md:hover:bg-[#1c1d20] p-2 rounded-l-full relative translate-x-32 md:translate-x-28 md:hover:translate-x-0 md:duration-500 md:group/hh'>
                            <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-[#ebe4e4] flex justify-center items-center rounded-full'>
                                <Image className='md:group-hover/hh:rotate-[360deg] md:group-hover/hh:scale-75 md:duration-500' src="./svg/twitter-x-fill.svg" width={40} height={40} alt='Twitter' />
                            </div>
                            Twitter
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
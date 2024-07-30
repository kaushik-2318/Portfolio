'use client'

import { useEffect } from "react";

import Preloader from "../components/Preloader"
import Hero from '../components/Hero'
import About from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Project from "../components/Projects";
import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Preloader />
      <Hero />
      <div className="absolute bg-[#ebe4e4] rounded-t-3xl flex justify-center items-center flex-col w-full min-h-max">
        <About />
        <TechStack />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
'use client';
import { useEffect } from 'react';

import { animation } from './animation'

export default function index() {
    useEffect(() => {
        animation();
    }, []);
    return (
        <>
            <div className="preloadercontainer h-screen w-screen flex fixed justify-center z-50 items-center bg-[#141516] cursor-none">
                <p className="text flex text-white text-sm md:text-2xl items-center font-extrabold font-Syne opacity-0 overflow-hidden">
                    <span>Developer,&nbsp;&nbsp;</span>
                    <span>Designer,&nbsp;&nbsp;</span>
                    <span>Driller</span>
                </p>
            </div>
        </>
    )
}
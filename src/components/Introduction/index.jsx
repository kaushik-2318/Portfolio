import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Index() {
    useGSAP(() => {
        gsap.from('.animate div', {
            y: 50,
            duration: 1,
            stagger: 0.05,
            opacity: 0,
            delay: 4.5,
            ease: "back.out(4)"
        });
    });

    return (
        <div className='text-white h-screen flex justify-center items-center cursor-default'>
            <div className='fixed'>
                <div className="text-2xl font-Vonique md:tracking-widest">Hello!!!</div>
                <div className="animate font-Varino text-6xl md:text-9xl w-full flex -mt-1 md:-mt-8">
                    <div>K</div>
                    <div>A</div>
                    <div>U</div>
                    <div>S</div>
                    <div>H</div>
                    <div>I</div>
                    <div>K</div>
                </div>
            </div>
        </div>
    );
}
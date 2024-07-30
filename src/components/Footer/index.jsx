'use Client'
import { useEffect, useState } from "react";

export default function footer() {

    const [currentTime, setCurrentTime] = useState('');
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        setCurrentTime(currentDate.toLocaleTimeString());
        setCurrentYear(currentDate.getFullYear());

        const intervalId = setInterval(() => {
            const updatedDate = new Date();
            setCurrentTime(updatedDate.toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="bg-zinc-900 text-center w-full h-20 flex justify-around items-center font-Montserrat text-sm">
                <div>
                    <div className="text-gray-500">Version</div>
                    <div className="text-white">2024</div>
                </div>
                <div className="text-white">
                    Made by Kaushik Verma
                    <br />
                    <div className="text-gray-500">
                        Copyright © {currentYear}  - All Rights Reserved

                    </div>
                </div>
                <div>
                    <div className="text-gray-500 ">Local Time</div>
                    <div className="text-white">{currentTime}</div>
                </div>
            </div>
        </>
    )
}
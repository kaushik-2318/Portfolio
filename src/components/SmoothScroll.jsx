'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis root options={{
            smoothWheel: true,
            syncTouch: true,
            lerp: 0.5,
        }}>
            {children}
        </ReactLenis>
    )
}
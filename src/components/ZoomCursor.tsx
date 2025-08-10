"use client"
import { CursorContext } from '@/context/cursor-context';
import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ZoomCursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { isHovering } = useContext(CursorContext);
    const size = isHovering ? 100 : 40
    const scale = isHovering ? 2 : 1

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [])

    return (
        <motion.div className='fixed pointer-events-none z-50 mix-blend-difference bg-white rounded-full flex items-center justify-center'
            animate={{
                x: position.x - size / 2,
                y: position.y - size / 2,
                width: size,
                height: size,
                scale
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
            <div className={`${isHovering ? 'block' : 'hidden'} w-4 h-4 bg-black rounded-full`}></div>
        </motion.div>
    )
}

export default ZoomCursor
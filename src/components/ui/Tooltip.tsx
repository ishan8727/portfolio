"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    delay?: number;           // show delay in ms
    followCursor?: boolean;   // whether tooltip follows cursor
    offset?: { x: number; y: number }; // pixel offset
}

const Tooltip = ({
    children,
    text,
    delay = 250,
    followCursor = true,
    offset = { x: -12, y: 14 }, // bottom-left of cursor
}: TooltipProps) => {
    const [show, setShow] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const mountedRef = useRef(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        clearTimer();
        timerRef.current = setTimeout(() => setShow(true), delay);
    };
    const handleMouseLeave = () => {
        clearTimer();
        setShow(false);
    };

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!followCursor) return;
        setCoords({ x: e.clientX + offset.x, y: e.clientY + offset.y });
    }, [followCursor, offset.x, offset.y]);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
            clearTimer();
        };
    }, []);

    const tooltipNode = (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="tooltip"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="pointer-events-none select-none z-[9999]
                        w-max min-w-[90px] max-w-[260px]
                        px-4 py-1.5 text-sm leading-snug text-white font-medium
                        rounded-2xl shadow-2xl
                        bg-white/15 backdrop-blur-xl backdrop-saturate-150
                        border border-white/25
                        "
                    style={{
                        position: followCursor ? 'fixed' : 'absolute',
                        left: followCursor ? coords.x : '50%',
                        top: followCursor ? coords.y : '100%',
                        transform: followCursor ? 'translate(0,0)' : 'translate(-55%, 8px)',
                        WebkitBackdropFilter: 'blur(14px) saturate(160%)',
                        backdropFilter: 'blur(14px) saturate(160%)',
                        boxShadow: '0 4px 24px -2px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)',
                        filter: 'none', // neutralize parent filters
                        mixBlendMode: 'normal',
                    }}
                >
                    {text}
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <div
            ref={wrapperRef}
            className="relative inline-block align-middle"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            // internal isolation from parent effects
            style={{ filter: 'none' }}
        >
            {children}
            {followCursor
                ? (typeof window !== 'undefined' && createPortal(tooltipNode, document.body))
                : tooltipNode}
        </div>
    );
};

export default Tooltip;
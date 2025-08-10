"use client"

import { createContext, useState, ReactNode } from "react"

type CursorContextType = {
    isHovering: boolean
    setHovering: (hovering: boolean) => void
}

export const CursorContext = createContext<CursorContextType>({
    isHovering: false,
    setHovering: () => { }
})

export const CursorProvider = ({ children }: { children: ReactNode }) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <CursorContext.Provider value={{ isHovering, setHovering: setIsHovering }}>
            {children}
        </CursorContext.Provider>
    )
}
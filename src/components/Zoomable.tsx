// This is a wrapper components

import { CursorContext } from "@/context/cursor-context"
import { ReactNode, useContext } from "react"

export const Zoomable = ({ children }: {children: ReactNode}) =>{
    const {setHovering} = useContext(CursorContext);

    return(
        <div
        onMouseEnter={()=> setHovering(true)}
        onMouseLeave={()=> setHovering(false)}
        >
            {children}
        </div>
    )
}
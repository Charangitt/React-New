import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [count, setCount] = useState(0)

    return(
        <ThemeContext.Provider value = {{count}}>
            {children}        
        </ThemeContext.Provider>
    )
}



export default ThemeContext
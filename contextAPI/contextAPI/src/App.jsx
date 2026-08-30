import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { DataCenter } from './DataCenter'

export default function App() {
  return (
    <ThemeProvider>
        <DataCenter/>
    </ThemeProvider>
  )
}

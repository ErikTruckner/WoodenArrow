import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  }
  return (
    <>
      <div style={divStyle}>
        <h1>Project Wooden Arrow</h1>
      </div>
    </>
  )
}

export default App

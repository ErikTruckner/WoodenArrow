import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import PlayerOne from './characters/PlayerOne'
import './index.css'
import { useState } from 'react'
import * as THREE from 'three'

function App({ camera }) {
  const divStyle = {
    color: 'red',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '10vh',
    opacity: '0.5',
    position: 'absolute',
    top: '0',
  }
  return (
    <>
      <Canvas>
        <color attach='background' args={['black']} />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <PlayerOne />
      </Canvas>
      <div style={divStyle}>
        <h1>Project Wooden Arrow</h1>
      </div>
    </>
  )
}

export default App

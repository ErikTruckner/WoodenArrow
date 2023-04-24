import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PlayerOne, Bullet } from './characters/PlayerOne'
import './index.css'
import { useState } from 'react'
import * as THREE from 'three'

function App({ camera }) {
  const [bullets, setBullets] = useState([])

  const handleMouseDown = (event) => {
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera)

    setBullets([...bullets, { position: vector }])
  }

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
      <Canvas onMouseDown={handleMouseDown}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <PlayerOne />
        {bullets.map((bullet, index) => (
          <Bullet key={index} position={bullet.position} />
        ))}
      </Canvas>
      <div style={divStyle}>
        <h1>Project Wooden Arrow</h1>
      </div>
    </>
  )
}

export default App

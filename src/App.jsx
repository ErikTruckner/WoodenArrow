import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MainContainer from './MainContainer'
import './index.css'

function App() {
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
      <Canvas className='canvas'>
        <OrbitControls />
        <MainContainer />
      </Canvas>
      <div style={divStyle}>
        <h1>Project Wooden Arrow</h1>
      </div>
    </>
  )
}

export default App

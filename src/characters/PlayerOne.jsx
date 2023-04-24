import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const PlayerOne = () => {
  const woodTexture = useTexture('../../public/wood_texture.jpg')
  const groupRef = useRef()
  useFrame(() => {
    groupRef.current.rotation.y += 0.02
  })
  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={woodTexture} />
      </mesh>
      <mesh position={[0, -3.5, 0]}>
        <cylinderGeometry args={[-0.2, -0.2, 7, 16]} />
        <meshBasicMaterial map={woodTexture} />
      </mesh>
    </group>
  )
}

export default PlayerOne

import { useTexture } from '@react-three/drei'

const PlayerOne = () => {
  const woodTexture = useTexture('../../public/wood_texture.jpg')
  return (
    <group>
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

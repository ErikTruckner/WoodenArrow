import { RoundedBox } from '@react-three/drei'

RoundedBox

const PlayerOne = () => {
  return (
    <mesh>
      <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color='#f3f3f3' />
      </RoundedBox>
    </mesh>
  )
}

export default PlayerOne

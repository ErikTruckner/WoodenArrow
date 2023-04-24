import { Extrude, Shape } from '@react-three/drei'
import * as THREE from 'three'

const PlayerOne = () => {
  const shape = new THREE.Shape()
  shape.moveTo(0, 1)
  shape.lineTo(-1, -1)
  shape.lineTo(1, -1)
  shape.lineTo(0, 1)

  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: false,
  }

  return (
    <Extrude args={[shape, extrudeSettings]}>
      <meshStandardMaterial color='lightblue' />
    </Extrude>
  )
}

export default PlayerOne

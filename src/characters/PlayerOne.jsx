import { Extrude, Shape } from '@react-three/drei'
import * as THREE from 'three'

import woodTexture from '../../public/wood_texture.jpg'

const PlayerOne = () => {
  const shape = new THREE.Shape()
  shape.moveTo(0, 1)
  shape.lineTo(-1, -1)
  shape.lineTo(1, -1)
  shape.lineTo(0, 1)

  // Define the UV coordinates for the shape
  const uvGenerator = new THREE.ExtrudeBufferGeometry(shape, {
    depth: 0.5,
    bevelEnabled: false,
  })
  const uvAttribute = uvGenerator.attributes.uv

  // Scale the UV coordinates to fit the texture onto the shape
  const texture = new THREE.TextureLoader().load(woodTexture)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const scale = new THREE.Vector2(1, 1).multiplyScalar(2)
  const offset = new THREE.Vector2(0.5, 0.5)
  const matrix = new THREE.Matrix3().set(
    scale.x,
    0,
    offset.x,
    0,
    scale.y,
    offset.y,
    0,
    0,
    1
  )
  uvAttribute.applyMatrix3(matrix)

  return (
    <Extrude args={[shape, { depth: 0.5, bevelEnabled: false }]}>
      <meshBasicMaterial map={texture} />
    </Extrude>
  )
}

export default PlayerOne

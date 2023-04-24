import { Extrude, Shape } from '@react-three/drei'
import * as THREE from 'three'

import woodTexture from '../../public/wood_texture.jpg'

const shape = new THREE.Shape()
shape.moveTo(0, 1)
shape.lineTo(-1, -1)
shape.lineTo(1, -1)
shape.lineTo(0, 1)

const extrudeSettings = {
  depth: 0.5,
  bevelEnabled: false,
}

const texture = new THREE.TextureLoader().load('path/to/texture.jpg')
texture.wrapS = texture.wrapT = THREE.RepeatWrapping

const material = new THREE.MeshStandardMaterial({
  color: 'lightblue',
  map: texture,
})

export const PlayerOne = () => {
  return (
    <Extrude args={[shape, extrudeSettings]}>
      <mesh material={material} />
    </Extrude>
  )
}

export const Bullet = ({ position }) => {
  const velocity = new THREE.Vector3(0, 5, 0)

  useFrame(({ clock, scene }) => {
    const elapsed = clock.getElapsedTime()
    const deltaY = velocity.y * elapsed

    if (position.y + deltaY < 10) {
      position.y += deltaY
      const clone = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, extrudeSettings),
        material
      )
      clone.position.copy(position)
      clone.scale.set(0.125, 0.125, 0.125)
      scene.add(clone)
    }
  })

  return null
}

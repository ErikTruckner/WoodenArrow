const PlayerOne = () => {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial color='lightblue' />
    </mesh>
  )
}

export default PlayerOne

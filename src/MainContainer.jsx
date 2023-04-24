import PlayerOne from './characters/PlayerOne'

const MainContainer = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <PlayerOne />
    </>
  )
}

export default MainContainer

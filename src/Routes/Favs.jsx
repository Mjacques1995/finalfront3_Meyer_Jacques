import { useContext } from 'react'
import Card from '../Components/Card'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Favs() {
  const { favs, addToFavs } = useContext(FavsLogicContext)
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '15px',
    maxWidth: '1280px',
    margin: '0 auto'
};
  return (
    <main>
      <h1>Dentists favs</h1>
      <section style={sectionStyle}>
            {favs.map((dentist) => (
                <Card
                    key={dentist.id}
                    id={dentist.id}
                    name={dentist.name}
                    username={dentist.username}
                    onAddToFavs={() => addToFavs(dentist)}
                />
            ))}
      </section>
      {favs.length === 0 && <p> You don't have favorite dentists</p>}
    </main>
  )
}
export default Favs
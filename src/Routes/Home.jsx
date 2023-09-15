import { useContext } from 'react';
import Card from '../Components/Card';
import { ApiContext } from '../context/ApiContextProvider';
import { FavsLogicContext } from '../context/FavsLogicContextProvider';

function Home() {
    const { apiData } = useContext(ApiContext);
    const { addToFavs } = useContext(FavsLogicContext);

    const sectionStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '15px',
      maxWidth: '1280px',
      margin: '0 auto'
  };

    

    return (
        <main>
            <h1>Home</h1>
            <section style={sectionStyle}>
                {apiData.map((dentist) => (
                    <Card
                        key={dentist.id}
                        id={dentist.id}
                        name={dentist.name}
                        username={dentist.username}
                        onAddToFavs={() => addToFavs(dentist)}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;

import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
// Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  const[pokemon, setPokemon]=useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  const poke2={
    name: "Turtwig",
    type: "Grass",
    evolved: true,
    weight: 10.2,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/6/68/0387Turtwig.png',
    id: 1
  }

  
  
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard poke={pokemon} setPoke={setPokemon}/>
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard poke={poke2}/>
    </FlexContainer>
  </>
    
  );
}

export default App;

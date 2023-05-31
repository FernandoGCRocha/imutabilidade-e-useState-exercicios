import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({poke, setPoke}) => {

    const evoluirPokemon = () => {
        alert("Cliquei no botão de evoluir")
        if(poke.evolved===true){
          alert("Pokemon já evoluído")
        }else{
          alert("Pokemon Evoluiu")
        }
    }
    
  return (
    <Card color={poke.color}>
        <img src={poke.image} alt={`Pokemon`}/>
        <PokemonName>{poke.name}</PokemonName>
        <PokemonType>{poke.type}</PokemonType>
        <p>{poke.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(poke)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard
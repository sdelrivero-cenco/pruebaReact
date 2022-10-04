import React from 'react'

import useGetApi from '../hooks/useGetApi';


const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const pokemones =  useGetApi(url)
    
    // console.log(pokemones)

  return (
      <div>
        {pokemones.map((pokemon,index)=>
        <p key={pokemon.name + index}>{pokemon.name}</p>
)}
    </div>
  )
}

export default Pokemon
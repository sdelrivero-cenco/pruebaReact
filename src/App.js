import './App.css';
// import DarkMode from './Components/DarkMode'
import React, {useState, useRef} from 'react'
import useGetApi from './hooks/useGetApi';
import Pokemon from './Components/Pokemon';

const url = "https://pokeapi.co/api/v2/pokemon";

function App() {
  

  // console.log(useGetApi(url))
  
  return (
    <div className="App">
        <Pokemon/>
    </div>
  );
}

export default App;

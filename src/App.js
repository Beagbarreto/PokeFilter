import React, { useState, useEffect } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPokemons, setFilterPokemons] = useState([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     const pokemons = mockPokemonsData;
  //     pokemons.map((poke, i) => {
  //       setPokemons(poke, i);

  //     });
  //     setPokemons(pokemons);
  //   };
  //   fetchData();
  // }, []);
  const pokemonDetail = { pokemons };
  console.log(pokemonDetail);

  useEffect(() => {
    SetLoading(true);
    setPokemonsData(pokemons);
    console.log(pokemons);
    SetLoading(false);
  }, []);

  useEffect(() => {
    setFilterPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemons]);

  if (loading) {
    return <p>Loading pokemons...</p>;
  }

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        // value={pokemons}
        placeholder="What Pokemon are you looking for?"
      />
      <div className="cards">
        {filterPokemons.map((pokemon, index) => (
          <CardItem key={index} {...pokemon} />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.targe.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={data}
          placeholder="What Pokemon are you looking for?"
        />
      </form>
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
      </div>
    </div>
  );
}

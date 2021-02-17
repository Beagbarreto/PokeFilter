import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.targe.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(data);
  // }

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="What Pokemon are you looking for?"
      />
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
      </div>
    </div>
  );
}

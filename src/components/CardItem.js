import React from "react";

const CardItem = (props) => {
  const { name, sprite } = props;

  return (
    <div className="card-item">
      <h1>POKEMON</h1>
      <h2>{name}</h2>
      <img src={sprite} alt="pokemon" />
    </div>
  );
};

export default CardItem;

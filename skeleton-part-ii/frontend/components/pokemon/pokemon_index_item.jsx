import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (
    <Link to="/pokemon/:pokemonId">
      <li className="pokemon-index-item">
        <span>{props.pokemon.id}</span>
        <img src={props.pokemon.imageUrl} />
        <span>{props.pokemon.name}</span>
      </li>
    </Link>
  )
}

export default PokemonIndexItem;
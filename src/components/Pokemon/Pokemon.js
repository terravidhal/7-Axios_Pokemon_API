import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Pokemon.css";
import axios from "axios";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const request = "https://pokeapi.co/api/v2/pokemon?limit=807";

    const getPokemonsLists = async () => {
      try {
        axios.get(request).then((response) => {
          setPokemons(response.data.results);
        });
      } catch (error) {
        console.log("error message++", error.message);
        setPokemons([]); //Ce tableau vide force useEffect à s'afficher UNIQUEMENT lorsque le composant rend pour la première fois
      }
    };

    getPokemonsLists();
  }, []);

  return (
    <div className="PokemonLists">
      <h1>All pokemons</h1>
      <ul>
        {pokemons.map((elt, index) => (<li key={index} className="pokemon">{elt.name}</li>))}
      </ul>
    </div>
  );
}

Pokemon.propTypes = {};

Pokemon.defaultProps = {};

export default Pokemon;

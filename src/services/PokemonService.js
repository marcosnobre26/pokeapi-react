import axios from 'axios';


const getAll = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000000&offset=0");
};

const getPokemon = nome => {
    console.log("https://pokeapi.co/api/v2/pokemon/"+nome);
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+nome);
  };

export default {
    getAll,
    getPokemon,
};

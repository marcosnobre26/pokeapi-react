import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import PokemonDataService from "../services/PokemonService";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

const filter = createFilterOptions();

const Pokemons = () => {
    
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [value, setValue] = React.useState(pokemons[0]);

    useEffect(() => {
        retrieveTutorials();
    }, []);
    
    const retrieveTutorials = () => {
      PokemonDataService.getAll()
        .then(response => {
          setPokemons(response.data.results);
        })
        .catch(e => {
          console.log(e);
        });
    };
    //console.log(pokemons);
  
    function Pokemon(pokemon) {
      console.log(pokemon);
      PokemonDataService.getPokemon(pokemon)
        .then(response => {
          setPokemon(response.data.results);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return (
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={6}>
          <p>{pokemons.length}</p>
          <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={pokemons.map((option) => option.name)}
            onChange={(event, pokemon) => {
              setValue(pokemon);
              Pokemon(pokemon);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Procure um pokemon aqui!" margin="normal" variant="outlined" />
              
            )}
          />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>

      </Grid>

      );
  }

export default Pokemons;
import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import PokemonDataService from "../services/PokemonService";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Carousel } from 'react-responsive-carousel';
import Pok from './Pokemon';


const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 140,
  },
  imagem:{
    width: null
  }

});

const filter = createFilterOptions();

const Pokemons = () => {
    
    const classes = useStyles();
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [imagem, setImagens] = useState([]);
    
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

    /*const content = imagens.posts.map((foto) =>
        <div key={foto.id}>
          <h3>{foto.title}</h3>
          <p>{foto.content}</p>
        </div>
    );*/
    //console.log(pokemons);
  
    function Pokemon(pokemon) {
      console.log(pokemon);
      PokemonDataService.getPokemon(pokemon)
        .then(response => {
          setPokemon(pokemon);
          setHabilidades(response.data.abilities);
          setImagens(response.data.sprites.other.dream_world);
          //setHabilidades(response.data);
          console.log(response.data);

          
        })
        .catch(e => {
          console.log(e);
        });  
        
    }

    console.log(habilidades);
    console.log(imagem);

    return (
      
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={8}>
          <p>{pokemons.length}</p>
          <p>habilidades: {habilidades.length}</p>
          <p>imagens: {imagem.length}</p>
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


        <Grid item xs={4}>
          <Pok pokemon={pokemon} />
          
          
        </Grid>

      </Grid>

      );
  }

export default Pokemons;
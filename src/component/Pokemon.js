import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PokemonDataService from "../services/PokemonService";

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

const Pokemon = (props) =>
{
    console.log(12);
    console.log(props.pokemon);
    const classes = useStyles();
    const [pokemon, setPokemon] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [imagem, setImagens] = useState([]);



    PokemonDataService.getPokemon(props.pokemon)
            
        .then(response => {
            
        setPokemon(props.pokemon);
        setHabilidades(response.data.abilities);
        setImagens(response.data.sprites.other.dream_world);
        //setHabilidades(response.data);
        console.log(response.data);

        
        })
        .catch(e => {
        console.log(e);
    });
    console.log(imagem);

    return(
        <div>
            <p>Here comes {props.pokemon}</p>

            <Card className={classes.root}>
                <CardActionArea>
                
                <img className={classes.imagem} src={imagem.front_default} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {pokemon}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Pokemon;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import Home from './component/Home'; 
import Pokemons from './component/Pokemons';
import Pokemon from './component/Pokemon';
import Pokedex from './component/Pokedex';
import Demo from './component/Demo';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function BasicExample() {
  const classes = useStyles();
  return (
    <Router>
      
      <div>
      <Container maxWidth="lg">
      
      
      <Grid container spacing={0}>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Link to="/">Home</Link>
              </Paper>
            </Grid>
          
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Link to="/pokemons">Pokemons</Link>
              </Paper>
            </Grid>
          
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Link to="/pokedex">Pokedex</Link>
              </Paper>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Link to="/demo">Demo</Link>
              </Paper>
            </Grid>
        </Grid>
        

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/pokemon">
            <Pokemon />
          </Route>
        </Switch>
        </Container>
      </div>
      
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

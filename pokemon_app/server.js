const express = require('express');

const pokemon = require('./models/pokemon');

const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
  // res.send(pokemon);
  res.render('index.ejs', {pokemonList:pokemon});
})

app.get('/pokemon/:name', (req, res) =>{
  // res.send(req.params.name);
  pokemon.forEach(element => {
    if (element.name === req.params.name) {
      res.render('show.ejs', {pokemon:element})
    }
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
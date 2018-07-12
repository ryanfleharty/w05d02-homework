
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon');

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));  // allows alt methods such as "PUT" from the html form to call a corresponding route
app.use(express.static('public'));

// Index
app.get('/pokemon', (req, res) => {
  // res.send(pokemon);
  res.render('index.ejs', {pokemonList:pokemon});
})

// Show one item of the array
app.get('/pokemon/:name', (req, res) =>{
  // res.send(req.params.name);
  pokemon.forEach(element => {
    if (element.name === req.params.name) {
      res.render('show.ejs', {
        pokemon:element,
        pokemonList:pokemon
      })
    }
  });
})

// Show the edit form
app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: pokemon[req.params.index],
    index: req.params.index
  });
});

// New route - Show the Form
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

// Route that the form sends info to
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body);
  res.redirect('/pokemon');
});

// Route to update / edit an item
app.put('/pokemon/:index', (req, res) => {
  // req.body is the updated form info
  pokemon[req.params.index] = req.body;
  res.redirect('/pokemon');
});

app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon');
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

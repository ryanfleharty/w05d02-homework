
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));

const pokemon = require('./models/pokemon');



app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// shows all the pokemon
app.get("/pokemon/index", (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  });
});

// Show Route
app.get('/pokemon/:id', (req, res) => {
  // render is when you want to send
  // an ejs template to the client

  res.render('show.ejs', {
    pokemon: pokemon[req.params.id],
    id: req.params.id
  });
});






app.listen(PORT, () => {
  console.log("Welcome to the Pokemon App!");
});

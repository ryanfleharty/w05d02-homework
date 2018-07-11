
const express = require('express');
const app = express();
const PORT = 3000;

const pokemon = require('./models/pokemon');


app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Show Route
app.get('/pokemon', (req, res) => {
  // render is when you want to send
  // an ejs template to the client
  console.log(req.params)
  res.render('show.ejs', {
    pokemon: pokemon // This creates
    // a "fruit" variable in the show page.
  });
});


//app.get("/pokemon", (req, res) => {

  // res.render("show.ejs", {
  //   thesePokemon: pokemon
  // });

  // res.render("show.ejs", {
  //   thesePokemon: pokemon
  //
  //   //console.log(req);
  // });

//   res.render('show.ejs', {
//   fruit: Fruits[req.params.index] // This creates
//   // a "fruit" variable in the show page.
// });

//});

app.listen(PORT, () => {
  console.log("Welcome to the Pokemon App!");
});

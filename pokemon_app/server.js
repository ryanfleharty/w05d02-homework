const express = require('express');
const app = express();
const PORT = 3000;

const Pokemon = require('./models/pokemon');


app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {pokemonList: Pokemon});
});

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {pokemonList: Pokemon[req.params.id]});
});
















app.listen(PORT, function() {
	console.log('Gotta catch \'em all at Port:', PORT);
});
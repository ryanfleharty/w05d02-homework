const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js');

app.get('/', (req,res) => {
	res.send('Welcome to the Pokemon app!');
})

app.get('/pokemon', (req,res) => {
	res.send(pokemon);
})
















app.listen(3000, () => {
	console.log('Ready OK')
})
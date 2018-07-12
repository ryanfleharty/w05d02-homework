const express = require('express');
const app = express();

const Pokemon = require('./models/pokemon.js');

app.get('/', (req,res) => {
	res.send('Welcome to the Pokemon app!');
})

app.get('/pokemon', (req,res) => {
	console.log(Pokemon);
	res.render('index.ejs', {
	pokemon:Pokemon
});
});
















app.listen(3002, () => {
	console.log('Ready OK')
})
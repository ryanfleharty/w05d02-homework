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


app.get('/pokemon/:id', (req,res) =>{
	res.render('show.ejs', {
	pokemon:Pokemon[req.params.id]
	});
});















app.listen(3002, () => {
	console.log('Ready OK')
})
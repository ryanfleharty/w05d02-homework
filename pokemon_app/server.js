const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');







app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
});


app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		Pokemon: pokemon
	});
});


app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		Pokemon: pokemon[req.params.id]
	});
});


























app.listen(3000, () => {
  console.log('listening on port 3000');
});
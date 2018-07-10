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


app.listen(3000, () => {
  console.log('listening on port 3000');
});
const express = require('express');
const app = express();
const PORT = 3000;

const methodOverride = require('method-override');
app.use(methodOverride("_method"));

const Pokemon = require('./models/pokemon');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Index Page - All of the Pokemons (Main Page):
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemonList: Pokemon
	});
});

// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Post Route - Add Another Pokemon:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {
	});
});

app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    res.redirect('/pokemon');
});


// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Edit Route + Put Route - Delete Individual Pokemon:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++

app.get('/pokemon/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id,
	});
});

app.put('/pokemon/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon');
});


// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Show Page - Individual Pokemon:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++


app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemonList: Pokemon[req.params.id],
		id: req.params.id,
	});
});



// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Delete Route - Delete Individual Pokemon:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon')
});





app.listen(PORT, function() {
	console.log('Gotta catch \'em all at Port:', PORT);
});
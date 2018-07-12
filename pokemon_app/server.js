const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const Pokemon = require("./models/pokemon");

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
	res.send("Welcome to the Pokemon App!");
});

// INDEX
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});

// NEW
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs', {
	});
});

// CREATE
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
});

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id,
	});
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id,
	});
});

// UPDATE
app.put('/pokemon/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon');
});

// DELETE
app.delete('/pokemon/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon');
});


app.listen(3000, () => {
	console.log("listening on port 3000");
})

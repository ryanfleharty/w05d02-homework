const express	 = require('express');
const router 	 = express.Router();
const Pokemon 	 = require('../models/pokemon.js');

// index
router.get('/', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});

// new
router.get('/new', (req, res) => {
	res.render('new.ejs', {
	});
});

// create
router.post('/', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
});

// edit
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id,
	});
});

// show
router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id,
	});
});

// update
router.put('/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon');
});

// delete
router.delete('/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon');
});



module.exports = router;
const express = require('express');
const router = express.Router();


const Pokemon = require('../models/pokemon');

// router.use('/public', express.static('css'))

router.get('/', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

/////////////////////////////////////////////////////////

router.post('/', (req, res) => {
  Pokemon.push(req.body);
  res.redirect('/pokemon');
});

///////////////////////////////////////////////////////

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

////////////////////////////////////////////////////////

router.get('/:index/edit', (req, res) => {

  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.index],
    index: req.params.index
  });
});

///////////////////////////////////////////////////////////

router.get('/:index', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.index] // This creates
    // a "fruit" variable in the show page
  });
});

///////////////////////////////////////////////////////////////

router.put('/:index', (req, res) => {
  Pokemon[req.params.index] = req.body;
  res.redirect('/pokemon');
});

////////////////////////////////////////////////////////////////

router.delete('/:index', (req, res) => {
  Pokemon.splice(req.params.index, 1);
  console.log(req.params.index, ' this is req.params')
  res.redirect('/pokemon');
})

//////////////////////////////////////////////////////////////////

module.exports = router;
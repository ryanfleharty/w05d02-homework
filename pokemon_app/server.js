const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const Pokemon = require("./models/pokemon");

const methodOverride = require("method-override");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride("_method"))



app.get('/pokemon', (req, res) => {
	res.render("index.ejs", {"pokeList":Pokemon})
});

app.post('/pokemon', (req, res) => {
  Pokemon.push(req.body);
  res.redirect('/pokemon');
});

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

app.get('/pokemon/:id', (req, res) => {
	res.render("show.ejs" ,{pokemon:Pokemon[req.params.id]})
})

app.get('/pokemon/:id/edit', (req, res) =>{
  res.render("edit.ejs", {
  	pokemon: Pokemon[req.params.id], 
  	id:req.params.id})
});

app.put('/pokemon/:id', (req, res) => {
  Pokemon[req.params.id] = req.body;
  res.redirect("/pokemon");
})

app.delete('/pokemon/:id', (req, res) => {
  Pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon')
})











app.listen(3000, () => {
	console.log("Listening on port 3000!");

});



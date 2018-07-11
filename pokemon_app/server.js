const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const Pokemon = require("./models/pokemon");

const methodOverride = require("method-override");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride("_method"))



app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {"pokeList":Pokemon})
});

app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs" ,{pokemon:Pokemon[req.params.id]})
})

app.get("/pokemon/:index/edit", (req, res) =>{
  res.render("edit.ejs", {pokemon: Pokemon[req.params.id],
    index:req.params.id})

});

app.delete('/:index', (req, res) => {
  Pokemon.splice(req.params.id, 1);
  console.log(req.params.id, ' this is req.params')
  res.redirect('/pokemon')
})











app.listen(3000, () => {
	console.log("Listening on port 3000!");

});



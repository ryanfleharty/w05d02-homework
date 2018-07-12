const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));


const pokemon = require("./models/pokemon")

app.get('', (req, res) => {
	res.send("Welcome to the Pokemon App!")
});
app.get("/pokemon", (req, res) => {
	res.render("index.ejs", 
		{"pokemonList":pokemon});
});
app.get("/pokemon/:index", (req, res) => {
	res.render("show.ejs", {
		"pokemonList":pokemon[req.params.index]
		})
});

app.post("/pokemon", (req, res) => {
	pokemon.push(req.body);
	res.redirect("/pokemon")
});

app.get("/new", (req, res) => {
	res.render("new.ejs")
});

app.get("/pokemon/:index/edit", (req, res) => {
	res.render("edit.ejs", {
		"pokemonList": pokemon[req.params.index],
		index: req.params.index 
	})
})
app.put("/pokemon/:index", (req, res) => {
	pokemon[req.params.index] = req.body;
	res.redirect("/pokemon");
});

app.delete("/pokemon/:index", (req, res) => {
	pokemon.splice[req.params.index, 1]
	res.redirect("/pokemon");
	})






let PORT = 3000;
app.listen(PORT, () => {
	console.log("I can hear you");
});

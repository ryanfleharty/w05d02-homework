const express = require("express");
const app = express();
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




let PORT = 3000;
app.listen(PORT, () => {
	console.log("I can hear you");
});

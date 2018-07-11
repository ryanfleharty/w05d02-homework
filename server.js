const express = require("express");



const app = express();
const Pokemon = require("./models/pokemon");


const port = 3000;


app.get("/", (req, res) => {
	res.send("welcome to the Pokemon app!");
});
app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {pokemon: Pokemon});
});

app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs", {pokemon:Pokemon[req.params.id]});
});



















app.listen(port, () => {
	console.log("howdy cowboy")
})
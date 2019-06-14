const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = 3000;


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


app.get("/", (req, res) => {
	res.send("welcome to the Pokemon app!");
});
app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {pokemon: Pokemon});
});
app.get("/pokemon/:id/edit", (req, res) => {
	res.render("edit.ejs", {pokemon: Pokemon[req.params.id],
		id: req.params.id});
});
app.delete("/pokemon/:id", (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect("/pokemon");
});
app.put("/pokemon/:id", (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect("/pokemon");
});
app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs", {pokemon:Pokemon[req.params.id], id: req.params.id});
});




















app.listen(port, () => {
	console.log("howdy cowboy")
})
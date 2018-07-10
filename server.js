const express = require("express");



const app = express();
const Pokemon = require("./models/pokemon");


const port = 3000;


app.get("/", (req, res) => {
	res.send("welcome to the Pokemon app!");
});
app.get("/pokemon", (req, res) => {
	res.send(Pokemon);
});



















app.listen(port, () => {
	console.log("howdy cowboy")
})
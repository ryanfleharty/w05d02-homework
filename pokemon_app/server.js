const express = require("express");
const app = express();
const pokemon = require("./models/pokemon")

app.get('', (req, res) => {
	res.send("Welcome to the Pokemon App!")
});
app.get("/pokemon", (req, res) => {
	res.render("index.ejs")
});






let PORT = 3000;
app.listen(PORT, () => {
	console.log("I can hear you");
});

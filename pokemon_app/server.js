const express = require("express");

const app = express();

const bodyParser = require("body-parser")

const Pokemon = require("./models/pokemon")

app.use(bodyParser.urlencoded({extended: false}))


app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {"pokeList":Pokemon})
});













app.listen(3000, () => {
	console.log("Listening on port 3000!");

});



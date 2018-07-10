const express = require('express');
const app = express();
const Pokemon = require("./models/pokemon");

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
	res.send("Welcome to the Pokemon App!");
})

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
})

app.listen(3000, () => {
	console.log("listening on port 3000");
})

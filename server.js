const express = require('express');
const app = express();
const Pokemon = require("./models/pokemon");
const port = 3000
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
	res.redirect('/pokemon');
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

app.listen(port, () => {
	console.log("listening on port " + port);
})
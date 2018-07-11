const express = require('express');
const app = express();
const Pokemon = require("./models/pokemon");

app.get('/pokemon', (req, res) => {
	res.send('Welcome to the Pokemon App!')
});

app.get("/pokemon/:index", (req, res) => {
	res.send(Pokemon[req.params.index]);
	console.log(Pokemon[req.params.index]);
});



app.listen(3000, () => {
  console.log('listening on port 3000');
});
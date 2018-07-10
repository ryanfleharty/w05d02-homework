const express = require('express');
const app = express();
const PORT = 3000;

const Pokemon = require('./models/pokemon');


app.get('/pokemon', (req, res) => {
	res.send(Pokemon);
})


















app.listen(PORT, function() {
	console.log('Gotta catch \'em all at Port:', PORT);
});
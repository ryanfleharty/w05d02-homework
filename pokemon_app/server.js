const express = require('express');
const app = express();
const PORT = 3000;



app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App");
})


















app.listen(PORT, function() {
	console.log('Gotta catch \'em all at Port:', PORT);
});
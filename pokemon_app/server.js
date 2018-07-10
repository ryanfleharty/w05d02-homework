const express = require('express');
const app = express();

app.get('', (req, res) => {
	res.send('Welcome to the Pokemon App!')
});






let PORT = 3000;
app.listen(PORT, () => {
	console.log("I can hear you");
});

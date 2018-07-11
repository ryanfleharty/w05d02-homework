const express = require('express');
const app = express();


app.get('/', (req,res) => {
	res.send('Welcome to the Pokemon app!');
})




















app.listen(3000, () => {
	console.log('Ready OK')
})
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override')
const Pokemon 		 = require("./models/pokemon.js");
const port 		     = 3000
//-------------------------------------------------------------//
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));


//---------------------------------------------//
// static folder for css 
app.use(express.static(__dirname + '/public'));

// require the controller after the middleware
const pokemonController = require('./controllers/pokemonController.js');

// to redirect to main page
app.get('/', (req, res)=> {
	res.redirect('/Pokemon');
})
//---------------------------------------------//
// set all routes to "/pokemon" and use the pokemonController.js controller to route

app.use('/Pokemon', pokemonController)






// listening on port 3k
app.listen(port, () => {
	console.log("listening on port " + port);
})
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');





app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// Require the controller after the middleware
const pokemonController = require('./controllers/pokemonController');

// This means every route in the fruitController
// now starts with /fruits
app.use('/pokemon', pokemonController);





app.listen(3000, () => {
  console.log('listening on port 3000');
});
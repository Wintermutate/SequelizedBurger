var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var router = express.Router();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

var port = process.env.PORT || 8080;
app.listen(port);
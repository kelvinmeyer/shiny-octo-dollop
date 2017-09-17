'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', hbs());
app.set('view engine','handlebars');

var downloads = require('./routes/download');

// routes
// ------
// downloads (rest style)
// 	create(post)	/downloads
// 	start(patch)	/downloads/id
// 	pause(patch)	/downloads/id
// 	stop(delete)	/downloads/id
//	status(get)	/downloads
//	status(get)	/downloads/id
//
app.get('/', function(req,res){
	res.render('index', {downloads:[{name: 'rick and morty'},{name: 'dnd'}]});
});

app.use('/downloads', downloads);

var s = app.listen(3000, function() {
	console.log('We are running on port 3000');
});

module.exports = s;

'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
const request = require('request');

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


var getStats = function(resu,norm){	
	request('http://localhost:3000/downloads', function(err, res, body) {  
		norm(resu,body);
	});
}

var normalize = function(resul,data){
	data = JSON.parse(data);
	data.t = [];
	Object.keys(data.torrents).forEach(function(k){
		data.torrents[k].id = k;
		if (data.torrents[k].state == 'Paused'){
			data.torrents[k].dl = false;
		} else {
			data.torrents[k].dl = true;
		}
		data.t.push(data.torrents[k]);
	});
	resul.render('index',data);
}

app.get('/', function(req,res){
	getStats(res,normalize);
});

app.use(express.static('public'));
app.use('/downloads', downloads);

var s = app.listen(3000, function() {
	console.log('We are running on port 3000');
});

module.exports = s;

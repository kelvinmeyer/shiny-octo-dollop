'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
	res.send('Hello, World!');
});

app.use('/downloads', downloads);

app.listen(3000, function() {
	console.log('We are running on port 3000');
});

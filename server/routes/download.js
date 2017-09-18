'use strict';
var express = require('express');
var router = express.Router();

const deluge = require('deluge')("http://localhost:8112/json", "deluge");
var callback = 
function callback(error, result) {
	if(error) {
		console.error(error);
		return;
	}
	console.log(result);
	return;
}

// routes
// ------
// downloads (rest style)
// 	create(post)	/downloads
// 	startAll(patch)	/downloads
// 	start(patch)	/downloads/id
// 	pauseAll(patch)	/downloads
// 	pause(patch)	/downloads/id
// 	stop(delete)	/downloads/id
//	statusAll(get)	/downloads
//	status(get)	/downloads/id

var create = function newDownload(req,res){
	deluge.add(req.body.magnet,"~/Downloads/",callback);
	res.redirect("/");

}

var startAll = function enableAllDownloads(req,res){
	console.log(req.body.state);
	res.send('all units we are go');
}

var start = function enableDownload(req,res){
	res.send('red squadren is go');
}

var pauseAll = function disableAllDownload(req,res){
	res.send('its time to stop');
}

var pause = function disableDownload(req,res){
	res.send('hey you, quit it');
}

var stop = function removeDownload(req,res){
	res.send('kil it with fire');
}

var stat = function allStatus(req,res){
	deluge.getTorrentRecord(function (error, result){
		if(error) {
			console.error(error);
		}
		res.send(result);
	});

}

var statusAll = function aStatus(req,res){
	res.send('inspection time');
}

router.post('/', create);
router.patch('/', startAll);
router.patch('/:id/', start);
router.patch('/:id/', pause);
router.delete('/:id', stop);
router.get('/', stat);
router.get('/:id/', statusAll);

module.exports = router;

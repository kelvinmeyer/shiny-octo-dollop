'use strict';
var express = require('express');
var router = express.Router();

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
	res.send('create new');
}

var startAll = function enableAllDownloads(req,res){
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

var status = function allStatus(req,res){
	res.send('here you go command');
}

var statusAll = function aStatus(req,res){
	res.send('inspection time');
}

router.post('/', create);
router.patch('/', startAll);
router.patch('/:id/', start);
router.patch('/', pauseAll);
router.patch('/:id/', pause);
router.delete('/:id', stop);
router.get('/', status);
router.get('/:id/', statusAll);

module.exports = router;

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
var tmp = ({ stats: 
   { upload_protocol_rate: 0,
     max_upload: -1,
     download_protocol_rate: 0,
     download_rate: 0,
     has_incoming_connections: false,
     num_connections: 0,
     max_download: -1,
     upload_rate: 0,
     dht_nodes: 0,
     free_space: 2752802816,
     max_num_connections: 200 },
  connected: true,
  torrents: 
    [{ id: '0494a80532b5b05dde567c61220d93406b7e22e7',
	max_download_speed: -1,
	dl: true,
        upload_payload_rate: 0,
        download_payload_rate: 0,
        num_peers: 0,
        ratio: -1,
        total_peers: -1,
        max_upload_speed: -1,
        state: 'Downloading',
        distributed_copies: 0,
        save_path: '/home/neo/Downloads',
        progress: 0,
        time_added: 1505735424,
        tracker_host: 'leechers-paradise.org',
        total_uploaded: 0,
        total_done: 0,
        total_wanted: 0,
        total_seeds: -1,
        seeds_peers_ratio: 1,
        num_seeds: 0,
        name: 'Rick and Morty Season 2 [WEBRIP] [1080p] [HEVC]',
        is_auto_managed: true,
        queue: 0,
        eta: 0 } ,{id: '08ad112d3469f45ed490ffed8253d48aa01e702d', 
	max_download_speed: -1,
	dl: false,
        upload_payload_rate: 0,
        download_payload_rate: 0,
        num_peers: 0,
        ratio: -1,
        total_peers: -1,
        max_upload_speed: -1,
        state: 'Downloading',
        distributed_copies: 0,
        save_path: '/home/neo/Downloads',
        progress: 0,
        time_added: 1505735424,
        tracker_host: 'leechers-paradise.org',
        total_uploaded: 0,
        total_done: 0,
        total_wanted: 0,
        total_seeds: -1,
        seeds_peers_ratio: 1,
        num_seeds: 0,
        name: 'Rick and Morty Season 1 [1080p] [HEVC]',
        is_auto_managed: true,
        queue: 1,
        eta: 0 } ],
  filters: 
   { state: 
      [ [Array],
        [Array],
        [Array],
        [Array],
        [Array],
        [Array],
        [Array],
        [Array] ],
     tracker_host: [ [Array], [Array], [Array] ] } });

app.get('/', function(req,res){
	res.render('index',tmp);
});

app.use(express.static('public'));
app.use('/downloads', downloads);

var s = app.listen(3000, function() {
	console.log('We are running on port 3000');
});

module.exports = s;

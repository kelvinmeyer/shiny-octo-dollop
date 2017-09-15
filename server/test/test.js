'use strict';
var request = require('supertest');
var server = require('../index');

describe('downloads controller', function(){
	describe('POST /downloads', function(){
		it('should return CREATED', function(done){
			request(server)
				.post('/downloads')
				.expect(201, done);
		});
	});
});

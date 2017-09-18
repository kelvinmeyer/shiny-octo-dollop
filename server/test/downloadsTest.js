'use strict';
var request = require('supertest');
var server = require('../index');

describe('downloads controller', function(){
	describe('POST /downloads', function(){
		it('should return CREATED', function(done){
			request(server)
				.post('/downloads')
				.expect(302, done);
		});
	});
	describe('PATCH /downloads', function(){
		it('should return OK', function(done){
			request(server)
				.patch('/downloads')
				.expect(200, done);
		});
	});
	describe('PATCH /downloads/id', function(){
		it('should return OK', function(done){
			request(server)
				.patch('/downloads/0')
				.expect(200, done);
		});
	});
	describe('DELETE /downloads/id', function(){
		it('should return OK', function(done){
			request(server)
				.delete('/downloads/0')
				.expect(200, done);
		});
	});
	describe('GET /downloads/id', function(){
		it('should return OK', function(done){
			request(server)
				.get('/downloads/0')
				.expect(200, done);
		});
	});
});

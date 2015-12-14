var should = require('should')
var assert = require('assert')
var request = require('supertest')


describe('user routes', function(){
	var base_url = "http://localhost:4000";
	var	studentId = 1;
	var student = {id: 1, name: "Kofi", age: 29, gender: 'M'};

	it('should create a student', function(done){
		// string1.should.equal(string2);
		request(base_url)		
		.post('/student')
		.expect(201)
		.end(function(err, resp){
			if(err)
				throw err

			resp.body.should.equal('Student has been created');
			done()
		})
	})

	it('should get all students', function(done){
		// string1.should.equal(string2);
		request(base_url)		
		.get('/student')
		.expect(200)
		.end(function(err, resp){
			if(err)
				throw err

			done()
		})
	})

	it('should get single student', function(done){
		// string1.should.equal(string2);
		request(base_url)
		.get('/student/'+student.id)
		.expect(200)
		.end(function(err, resp){
			if(err)
				throw err

			resp.body.should.be(Object);
			should(resp.body).have.property('id');
			should(resp.body).have.property('name');
			should(resp.body).have.property('age');
			should(resp.body).have.property('gender');
			
			done()
		})
	})

	it('should update a student', function(done){
		// string1.should.equal(string2);
		request(base_url)		
		.put('/student/'+studentId)
		.expect(200)
		.end(function(err, resp){
			if(err)
				throw err

			resp.body.should.equal('Student field updated');
			done()
		})
	})

	it('should delete a student', function(done){
		// string1.should.equal(string2);
		request(base_url)		
		.del('/student/'+studentId)
		.expect(204)
		.end(function(err, resp){
			if(err)
				throw err
			done()
		})
	})
})
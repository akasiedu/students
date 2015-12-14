var restify = require('restify');
var server = restify.createServer();
var _ = require('underscore');
var sre = require('swagger-restify-express');
var Student = require('./models/students').Student;

// var students = [
// {id: 1, name: "Kofi", age: 29, gender: 'M'},
// {id: 2, name: "Peter", age: 23, gender: 'M'},
// {id: 3, name: "Ama", age: 22, gender: 'F'},
// {id: 4, name: "Yaw", age: 27, gender: 'M'},
// {id: 5, name: "Akosua", age: 22, gender: 'F'},
// {id: 6, name: "Cheryl", age: 24, gender: 'F'},
// {id: 7, name: "Fiifi", age: 26, gender: 'M'}
// ]

server.post('/student', function(req, res, next){
	console.log(req.params);
	var studentName = req.params.name;
	var studentAge = req.params.age;
	var studentGender=req.params.gender;

	if((typeof studentName !== "undefined" && studentName !== null) && 
		(typeof studentAge !== "undefined" && studentAge !== null) &&
		(typeof studentGender !== "undefined" && studentGender !== null)){
		var student = new Student({name : studentName, age: studentAge, gender: studentGender});
		student.save();
	} else{
		res.send(400, "Wrong params set");
	}
})

server.get('/student', function(req, res, next){
	res.send(200, {data: students});
})



server.get('/student/:id', function(req, res, next){
	var query = [req.params.id];
	var selected_has = _(query).object(query);
	var matches = _(students).filter(function(p) {
		return selected_has[p.id]
	});

	res.send(200, {student: matches[0]});
})



server.put('student/:id', function(req, res, next){
	res.send(200, "Student field updated");
})

server.del('/student/:id', function(req, res, next){
	res.send(204);
})


sre.init(server, {
	resourceName : 'swag',
	server : 'restify', 
	httpMethods : ['GET', 'POST'],
	basePath : 'http://localhost:4000',
	ignorePaths : {
		GET : ['path1', 'path2'],
		POST : ['path1']
	}
}
)

server.listen(4000, function(){
	console.log("I'm listening  "+ server.name +" "+ server.url);

})
var mongoose = require ("mongoose");

var localDbUrl = "mongodb://localhost/project-test"

var Mongoose = {
	_db: mongoose.connection,
	_connect: function(){
		mongoose.connect (localDbUrl)
	},
	init: function(){
		this._connect();
		this._db.on ('connected', function(){
			console.log("connected successfully");
		});
		this._db.on ('error', function(){
			console.log("connection failed");
		})
	}
}

exports.Mongoose = Mongoose;
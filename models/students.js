var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  name:  String,
  age: Number,
  gender:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});


var Student = mongoose.model('Students', studentSchema);
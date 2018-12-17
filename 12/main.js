var util = require('./util');

util.getUserPosts('name' , function (err, value, name) {
	console.log(name);
	console.log(value);
});
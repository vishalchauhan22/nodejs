var async = require('async');
var request = require('request');

var data = {};

exports.getUserPosts = function (params, cb) {
	async.waterfall([
		function (callback) {
			request({
				method: 'GET',
				uri: 'https://jsonplaceholder.typicode.com/users',
				json: true
			}, function(error, body, response){
				callback(error, response[0]);
			});
		},
		function (users, callback) {
			/*console.log(users);*/
			data.name = users.name;
			request({
				method: 'GET',
				uri: 'https://jsonplaceholder.typicode.com/posts?userId='+users.id,
				json: true
			}, function(error, body, response){
				/*console.log(response[0]);*/
				data.post = response[0].body;
				callback(error, data);
			});
		}
		], function(err, response){
			cb(err, response, 'Adapty');
	});
};
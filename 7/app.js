var rp = require('request-promise');

var option = {
	uri: 'https://jsonplaceholder.typicode.com/posts/1',
	json: true
};

/*rp(option)
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.log(err.message);
	});
console.log('Last');*/

var rPromise = rp(option);

console.log("Some OtherStuffs");

rPromise.then(function (data) {
	console.log(data);
})
.catch(function (err) {
	console.log(err.message);
});
var fs = require('fs');

var content = fs.readFileSync('sample.txt', 'utf-8');
console.log("The file contetnt is printed below\n");
console.log(content);
fs.writeFileSync('second-sample.txt', content + '\n\n' + new Date().getTime());

//Async
/*fs.readFile('sample.txt', 'utf-8', function (err, data) {
	console.log("The file contetnt is printed below\n");
	console.log(data);

	fs.writeFile('second-sample.txt', data + '\n\n' + new Date().getTime(), function (err) {
		console.log("File was saved successfully");
	});
});*/
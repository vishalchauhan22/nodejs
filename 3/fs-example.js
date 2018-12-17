var fs = require('fs');

//Sync
/*var content = fs.readFileSync('sample.txt', 'utf-8');
console.log("The file contetnt is printed below\n");
console.log(content);*/

//Async
fs.readFile('sample.txt', 'utf-8', function (err, data) {
	
});
console.log("The file contetnt is printed below\n");
console.log(data);

//Async
/*fs.readFile('sample.txt', 'utf-8', fileHandler);

function fileHandler (err, data) {
	console.log("The file contetnt is printed below\n");
	console.log(data);
}*/

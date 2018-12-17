var input = new Buffer(process.argv[2]);

function convertToBase64(inp){
	return inp.toString('base64');
}

var output = convertToBase64(input);

console.log("The base64 encoded string for " + input + " is " + output);
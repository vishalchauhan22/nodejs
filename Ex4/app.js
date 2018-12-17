var fs = require('fs');

fs.readFile('./test.txt', 'utf8', function(err, data){
	console.log("File Content");
});
console.log('In Between');
setTimeout(function(){
	console.log("Timeout Callback")
},2000)

console.log('Line 10');

for(var i=0;i<1000000000;i++){

}

console.log('At Last');
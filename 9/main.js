/*var util = require('./utility.js');

var input = 'I-Like-Techy-Mon';
console.log("Input is "+input);
var output = util.stringUtil(input);
console.log(output);*/

//console.log(newUtil.stringUtil(input));



var Util = require('./utility.js');
var util = new Util("FirstInstance");
console.log(organisationName);
var newUtil = new Util("SecondInstance");

var input = 'I-Like-Techy-Mon';
console.log("Input is "+input);
var output = util.stringUtil(input);
console.log(output);
console.log(util.instanceName);

console.log(newUtil.stringUtil(input));
console.log(newUtil.instanceName);
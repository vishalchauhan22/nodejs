String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

organisationName = "Adapty";

/*module.exports = {
	stringUtil: function (value) {
		return value.replaceAll('-', ' ');
	}
};*/

/*exports.stringUtil = function (value) {
	return value.replaceAll('-', ' ');
};

exports.newUtil = function (value) {
	return value.replaceAll('-', '_');
};*/

var Utility = function(name){
	this.instanceName = name;

	this.stringUtil = function (val) {
		return val.replaceAll('-', ' ');
	};
};

module.exports = Utility;
var instituteSignupInfo = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	console.log(req.body);
	var inst_info = new instituteSignupInfo(req.body);
	var promise = inst_info.save();
	promise.then(function(response) {
		res.send(response);
	});
}
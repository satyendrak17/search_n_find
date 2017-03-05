var MovieModel = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	MovieModel.find(function(error, response) {
		if(!error) {
			res.send({response : response});
		}
	});
}
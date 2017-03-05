var updateModel = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	
	updateModel.update({_id : req.body[1].id}, req.body, function(err, response) {
		if(!err) {
			res.send(response);
		}
	});
}
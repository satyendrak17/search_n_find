var deleteInstInfo = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	var _id = req.params.id;
	deleteInstInfo.remove({_id : _id}, function(err) {
		if(!err) {
			res.send('Doc deleted successfully!!!');
		}
	});
}
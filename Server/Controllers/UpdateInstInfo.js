var updateModel = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	let updateData = req.body.org_email_id,
		aboutData = req.body.about;

		console.log(req.body, updateData, aboutData);
	updateModel.update({'org_email_id' : updateData}, 
		{$set : {'about' : aboutData}},function (error, response) {
			if(!error) {
				res.send(response);
			} else {
				res.send("Error saving about for organisation " +error);
			}
		});
}

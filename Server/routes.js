var inst_signup_info = require('../Server/Controllers/InstituteSignupInfo');
var SaveInsInfo = require('../Server/Controllers/SaveInsInfo');
var updInstInfo = require('../Server/Controllers/UpdateInstInfo');
var deleteInstInfo = require('../Server/Controllers/DeleteInstInfo');

module.exports = function route(app) {
	app.get('/instituteInfo', inst_signup_info);
	app.post('/saveInstInfo', SaveInsInfo);
	app.post('/updateInstInfo', updInstInfo);
	app.delete('/deleteInstInfo/:id', deleteInstInfo);
}
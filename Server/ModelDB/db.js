var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//mongoose.connect('mongodb://localhost:27017/instituteSignup');
mongoose.connect('mongodb://satyendrak17:satyendrak17@ds119370.mlab.com:19370/institutesignup');
//mongoose.connect("mongodb://satyendrak17:satyendrak17@ds151707.mlab.com:51707/heroku_dp3rmhx0/rentonclick");
var instituteSignup = new mongoose.Schema(
		{ 
			org_email_id: String,
			personal_email_id: String,
			contact_number: Number,
			altername_number: Number,
			address : {
				area_code: String,
				country : String,
				state : String,
				city : String
			},
			//services_provided : [],
			speciality : String
		}
	);
var instituteSignupInfo = mongoose.model('Institute_Signup', instituteSignup);

module.exports.instituteSignupInfo = instituteSignupInfo; 
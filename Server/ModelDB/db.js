var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DBSchemas = require('./DBModel');

//mongoose.connect('mongodb://localhost:27017/instituteSignup');
mongoose.connect('mongodb://satyendrak17:satyendrak17@ds119370.mlab.com:19370/institutesignup');
//mongoose.connect("mongodb://satyendrak17:satyendrak17@ds151707.mlab.com:51707/heroku_dp3rmhx0/rentonclick");

// Adrress Schema..
const addressSchema = DBSchemas.addressSchema;
const aboutOrganisation = DBSchemas.aboutOrganisation;
var instituteSignup = new mongoose.Schema(
		{ 
			org_name: {
				type : String,
				required : true
			},
			password : {
				type : String,
				required : true
			},
			org_email_id: {
				type : String,
				required : true,
				index : {
					unique:true,
					dropDups : true
				}
			},
			personal_email_id: String,
			contact_number: {
				type : Number,
				required : true,
				unique : true,
				dropDups : true
			},
			altername_number: Number,
			address : [addressSchema],
			about : {
				type : aboutOrganisation
			},
			services_provided : [],
			speciality : String,
			image_url : String
		}
	);
var instituteSignupInfo = mongoose.model("Institute_Signup", instituteSignup);

module.exports.instituteSignupInfo = instituteSignupInfo; 
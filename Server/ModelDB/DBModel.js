const mongoose = require("mongoose");


const Schema = mongoose.Schema;

//Address schema for institute information
var addressSchema = new Schema({
	area_code : {
		type : String,
		required : true,
	},
	country : {
		type : String,
		required : true
	},
	state : {
		type : String,
		required : true
	},
	city : {
		type : String,
		required : true
	},
	city_code : {
		type : Number,
		required : true
	}

});


// About Schema for institute signup

const aboutOrganisation = new Schema({
	org_type : {
		type : String,
		required : true
	},
	working_hours : String,
	additional_info : {
		type : String
	}
});
module.exports = {
	addressSchema : addressSchema,
	aboutOrganisation : aboutOrganisation
}
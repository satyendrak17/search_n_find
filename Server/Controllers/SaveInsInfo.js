var instituteSignupInfo = require('../ModelDB/db').instituteSignupInfo;

module.exports = function(req, res) {
	var dataToSave = {
		  "org_email_id":req.body.org_email_id,
		  "personal_email_id":req.body.personal_email_id || '',
		  "contact_number":req.body.contact_number,
		  "altername_number":req.body.altername_number || 0,
		  "speciality": req.body.speciality || '',
		  "address": {
		  	"area_code": req.body.address.area_code,
		    "country": req.body.address.country,
		    "state": req.body.address.state,
		    "city": req.body.address.city
		  },
		  "services_provided" : req.body.services_provided || [],
		    "image_url" : req.body.image_url || ''
	}
	var inst_info = new instituteSignupInfo(dataToSave);
	var promise = inst_info.save(function(error, data) {
		var respData = {
			'message' : '',
			'error_data' : '',
			'response_data' : '',
			'status_code' : ''
		}
		if(error) {
			respData =  {
				'message' : 'Data could not be saved successfully',
				'error_data' : error,
				'status_code' : 500
			}
			res.send(respData);
		} else {
			respData = {
				message : 'Data saved successfully',
				response_data : data,
				status_code : 200
			}
			res.send(respData);
		}
	});
}
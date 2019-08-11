// filename: validation.js
// folder: classes
// Description: This file contains various functions for validation in this particular application
var validate = require("validate.js");


/* ===== VALIDATING USER INFORMATION ==== */

/*
	Description: Checks if a email is valid
	@params: email (string),

	returns: boolean
*/
function isValidEmail(email){
	var constraints = {
	  from: {
	    email: true
	  }
	};

	return validate({from: email}, constraints) ? true  : false;
	// => undefined
}

function isValidName(name){
	return true;
}

function isValidDate(date){
	return true;
}

function isValidPassword(password){
	return true;
}


/* ===== END VALIDATING USER INFORMATION ==== */



module.exports = {
	isValidEmail: isValidEmail,
	isValidName : isValidName, 
	isValidDate : isValidDate,
	isValidPassword: isValidPassword,
}
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

	return validate({from: email}, constraints) ? false  : true;
	// => undefined
}

function isValidHeader(header){
	let status = true;
	status = status 
		&& (typeof header == "string")
		&& (header != "");
	return status;
}

function isValidName(name){
	let status = true;
	status = status
		&& (typeof name == "string")
		&& (name != "");
	return status;
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
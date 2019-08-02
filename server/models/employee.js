// employee model

/*schema 
	'Employee' : {
		first_name: 'string',
		last_name: 'string',
		date_created: date,
		date_modified: date,
		email: 'string', <- primary key
		password: 'string',
	}
*/

/* crud methods */
function createEmployee(firstName, lastName, email, password){
	console.log("creating an employee");
	return 1;
}

function retrieveAllEmployees(){
	try{
		return "retrieving all employees" ;
	}
	catch(err){
		console.log("error retrieving All Employees");
		return err;
	}
}

function updateEmployee(email, values){
	let status = 1;
	console.log("updating employee "  + email + 
		" with values: " + values);
	return status;
}

function deleteEmployee(email){
	let status = 1;
	console.log("deleting employee " + email);
	return status;
}

module.exports = {
	createEmployee : createEmployee,
	retrieveAllmployees : retrieveAllEmployees,
	updateEmployee : updateEmployee,
	deleteEmployee : deleteEmployee,
}
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
async function createEmployee(firstName, lastName, email, password){
	console.log("creating an employee");
	return 1;
}

async function retrieveAllEmployees(){
	try{
		return "retrieving all employees" ;
	}
	catch(err){
		console.log("error retrieving All Employees");
		return err;
	}


}

async function updateEmployee(email, values){
	return "updating employee"  + email + 
		" with values: " + values;
}

async function deleteEmployee(email){
	return "deleting employee" + email;
}

module.exports = {
	createEmployee : createEmployee,
	retrieveAllmployees : retrieveAllEmployees,
	updateEmployee : updateEmployee,
	deleteEmployee : deleteEmployee,
}
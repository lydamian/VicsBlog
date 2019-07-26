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
function createEmployee(){
	console.log("deleting employee');
}

function retrieveAllEmployees(){
	console.log("retrieving all employees');

}

function updateEmployee(){
	console.log("updating employee');

}

function deleteEmployee(){
	console.log("deleting employee');
}

module.exports = {
	createEmployee : createEmployee,
	retrieveAllmployees : retrieveAllEmployees,
	updateEmployee : updateEmployee,
	deleteEmployee : deleteEmployee,
}
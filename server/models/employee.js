// employee model
const MongoClient = require('mongodb').MongoClient;
const DB = require('../config/db');

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

// testing method
function test(){
	console.log("testing in employee.js model function");
	const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true });
	client.connect(err => {
	  if(err){
		console.log("error connecting to the database");
	  }
	  else{
		// perform actions on the collection object
		const db = client.db('Test');
		const collection = db.collection('TestCollection');
		console.log(collection.find());
	  }
	  client.close();
	});

	// closing client
	client.close();
	return DB.getMongoUri();
}


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
	test: test,
}
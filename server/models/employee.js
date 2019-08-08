// employee model
const MongoClient = require('mongodb').MongoClient;
const DB = require('../config/db');
const CONNECTION_URL = DB.getMongoUri();

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
function test(callback){
	const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true });

	result = client.connect(err => {
	  if(err){
		console.log("error connecting to the database");
	  }
	  else{
		const db = client.db('Test');
		const collection = db.collection('TestCollection');
		let result = collection.find({}).toArray(function(err, docs) {
		    if(err){console.log("error retrieving collection in test"); client.close(); return -1;}
		    // closing client
		    console.log(docs[0]);
		    callback(docs[0]);
		  });
		}
	});
	return result;
}

/* crud methods */
function validateEmployee(){
	
};

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
// employee model
const MongoClient = require('mongodb').MongoClient;
const DB = require('../config/db');
const CONNECTION_URL = DB.getMongoUri();
const validator = require('../classes/validation');

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

// testing method
async function test2(){
	let url = CONNECTION_URL;
	try{
		const client = await MongoClient.connect(url);
		const dbo = await client.db('Test');
		let collection = await dbo.collection('TestCollection');
		let result = await collection.find({}).toArray();
		console.log(result);
		return result;
	}
	catch(err){
		return err;
	}
}

function test3(){
	let email = 'lydamian@gmail.com';
	return validator.isValidEmail(email) && true;
}

async function retrieveAllEmployees(){
	let url = CONNECTION_URL;
	try{
		const client = await MongoClient.connect(url, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('EmployeeUser');
		let result = await collection.find({}).toArray();
		return result;
	}
	catch(err){
		console.log("error retrieving All Employees");
		return err;
	}
}

async function createEmployee(firstName, lastName, email, password){
	let url = CONNECTION_URL;
	try{
		if(!validateEmployee(firstName, lastName, email, password)){throw "invalid employee"};
		let newEmployee = {firstName: firstName, lastName: lastName,email: email, password: password};
		
		const client = await MongoClient.connect(url, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('EmployeeUser');
		let result = await collection.insertOne(newEmployee);
		return result['result']['n']; // returns the number of documents inserted
	}
	catch(err){
		console.log("error retrieving All Employees");
		return err;
	}
}

/* crud methods */
function validateEmployee(firstName, lastName, email, password){
	let status = true;
	status = status && validator.isValidEmail(email)
				&& validator.isValidName(firstName)
				&& validator.isValidName(lastName)
				&& validator.isValidPassword(password);
	console.log("the status is: " + status);
	return status;
};

function updateEmployee(email, values){
	let status = 1;
	console.log("updating employee "  + email + 
		" with values: " + values);
	return status;
}

async function deleteEmployee(email){
	let status = 1;
	let url = CONNECTION_URL;
	try{
		let query = {email: email};
		const client = await MongoClient.connect(url, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('EmployeeUser');
		let result = await collection.deleteMany(query);
		return result['result']['n']; // returns the number of documents inserted
	}
	catch(err){
		console.log("error retrieving All Employees");
		return err;
	}
	console.log("deleting employee " + email);
	return status;
}

module.exports = {
	createEmployee : createEmployee,
	retrieveAllmployees : retrieveAllEmployees,
	updateEmployee : updateEmployee,
	deleteEmployee : deleteEmployee,
	test: test,
	test2: test2,
	test3: test3,
}
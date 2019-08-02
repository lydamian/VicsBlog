// employee router
const express = require("express");
const router = express.Router();
const employeeModel = require('../models/employee');

// define routes
router.get("/", (req, res) => {
    try{
	res.status(200).send(
	    "Welcome to the employees api"	
	);
    }catch(err){
	res.status(400).json({
	    message: "Some error occured",
	    err
	});
    }
});

router.get("/hello", (req, res) => {
    try{
	res.status(200).send(
	    "Welcome to the employees api"	
	);
    }catch(err){
	res.status(400).json({
	    message: "Some error occured",
	    err
	});
    }
});

router.get("/getAllEmployees", (req, res) => {
    try{
		let all_employees = employeeModel.retrieveAllmployees();
		res.status(200).json({
			all_employees : all_employees,
		});
    }catch(err){
		res.status(400).json({
			message: "Some error occured",
			err: err
		});
    }
});

router.post("/createEmployee", (req, res) => {
	let status = 0;
    try{
		console.log(req.body);
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let email = req.body.email;
		let password = req.body.password; // TODO: Damian, this needs to be secure/encrypted in the future

		status = employeeModel.createEmployee(firstName, lastName, email, password);
	
		res.status(200).json({
			status,
		});
    }catch(err){
		res.status(400).json({
			status: status,
			message: "Some error occured",
			err
		});
    }
});

router.post("/deleteEmployee", (req, res) => {
	let status = 0;
    try{
		console.log(req.body);
		let { email } = req.body;
		status = employeeModel.deleteEmployee(email);
		res.status(200).json({
			status
		});
    }catch(err){
		res.status(400).json({
			status,
			message: "Some error occured",
			err
		});
    }
});

router.post("/deleteEmployee/:email", (req, res) => {
	let { email } = req.params;
	allEmployees = employeeModel.deleteEmployee(employee);
	
    try{
	res.status(200).json({
		allEmployees
	});
    }catch(err){
	res.status(400).json({
		message: "Some error occured",
		err
	});
    }
});

router.get("/list/:email", (req, res) => {
  let { email } = req.params;
  try {
    
  } catch (err) {
    
  }
});


// exporting router
module.exports = router;
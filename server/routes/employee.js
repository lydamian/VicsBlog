// employee router
const express = require("express");
const router = express.Router();
const employeeModel = require('../models/employee');

// define routes
router.get("/", async(req, res) => {
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

router.get("/hello", async(req, res) => {
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

router.get("/getAllEmployees", async(req, res) => {
    try{
		let x = employeeModel.retrieveAllmployees();
		console.log(x);
		res.status(200).json({
			result : x,
		});
    }catch(err){
		res.status(400).json({
			message: "Some error occured",
			err: err
		});
    }
});

router.post("/createEmployee", async(req, res) => {
	firstName = "firstName";
	lastName = "lastName";
	email = "email";
	password = "password";

	status = employeeModel.createEmployee(firstName, lastName, email, password);	
    try{
	res.status(200).json({
		status
	});
    }catch(err){
	res.status(400).json({
		message: "Some error occured",
		err
	});
    }
});

router.post("/deleteEmployee/:email", async(req, res) => {
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

router.post("/deleteEmployee/:email", async(req, res) => {
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

router.get("/list/:email", async (req, res) => {
  let { email } = req.params;
  try {
    
  } catch (err) {
    
  }
});


// exporting router
module.exports = router;
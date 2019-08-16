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

router.get("/test", async (req, res) => {
    try{
    	employeeModel.test((result) => {
			console.log(result);
			res.status(200).json({
			 	result
			});
    	});
	   
    }catch(err){
		res.status(400).json({
		    message: "Some error occured",
		    err
		});
    }
});

router.get("/test2", async (req, res) => {
	console.log("inside the route");
    try{
	   let result = await employeeModel.test2();
	   console.log("logging some result: " + result);
	   await res.status(200).send(result);
    }catch(err){
    	console.log("there is an error");
    	res.status(400).send(err);``
    }
});

router.get("/test3", async (req, res) => {
	console.log(employeeModel.test3());
});

router.get("/getAllEmployees", async (req, res) => {
    try{
		let all_employees = await employeeModel.retrieveAllmployees();

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

router.post("/createEmployee", async (req, res) => {
	let status = 0;
    try{
		console.log(req.body);
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let email = req.body.email;
		let password = req.body.password; // TODO: Damian, this needs to be secure/encrypted in the future

		status = await employeeModel.createEmployee(firstName, lastName, email, password);
	
		res.status(200).json({
			status : status,
		});
    }catch(err){
		res.status(400).json({
			status: status,
			message: "Some error occured",
			err
		});
    }
});

router.post("/deleteEmployee", async (req, res) => {
	let status = 0;
    try{
		let { email } = req.body;
		status = await employeeModel.deleteEmployee(email);
		res.status(200).json({
			status, status
		});
    }catch(err){
		res.status(400).json({
			status,
			message: "Some error occured",
			err
		});
    }
});


router.post("/updateEmployee", async (req, res) => {	
	let status = 0;
    try{
    	let { email, values } = req.body;
		let status = await employeeModel.updateEmployee(email, values);
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


// exporting router
module.exports = router;
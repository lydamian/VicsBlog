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

router.get("/getAllEmployees", async(req, res) => {
	allEmployees = employeeModel.retreiveAllEmployees();
	
    try{
	res.status(200).json({
		allEmployees;
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
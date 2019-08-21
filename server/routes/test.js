const express = require("express");
const router = express.Router();
const testModel = require('../models/test');
var validation = require('../classes/validation');


function nonAsyncFunction(){
	return "hello world";
}

async function asyncFunction(){
	return "hello world";
}

/* GET Userlist page. */
router.get('/', async function(req, res) {

	let value = await nonAsyncFunction();
    res.status(200).send(
		value
	);
});


router.get('/test', function(req, res) {
	let result = testModel.my_default();
    res.status(200).send(
		result
	);
});

router.get('/testAsyncFunction', function(req, res) {
	let result = asyncFunction().then((value) => value);
	console.log(result);
    res.status(200).send(
		result
	);
});


router.get('/testValidation', (req, res) => {	
	console.log("testValidation method called");
	try{
		let input = req.query.input;
		console.log(input);
		let status = validation.isValidHeader(input);
		console.log(status);
		res.status(200).json({
			input,
			status
		});
	}
	catch(err){
		err
	}
});

module.exports = router;
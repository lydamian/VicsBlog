const express = require("express");
const router = express.Router();
const testModel = require('../models/test');

/* GET Userlist page. */
router.get('/', function(req, res) {
    res.status(200).send(
		"test route is working"
	);
});


router.get('/test', function(req, res) {
	let result = testModel.my_default();
    res.status(200).send(
		result
	);
});

module.exports = router;
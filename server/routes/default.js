// filename: default.js
// Description: this is the defaultRouter

const express = require("express");
const router = express.Router();

router.get("*", function(req, res) {
	let list_of_routes = {
		'employees' : ['getAllEmployees'],
	}
    res.status(200).send({
		list_of_routes : list_of_routes,
	
	});
});

module.exports = router;
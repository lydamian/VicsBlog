// filename: blog.js
// folder: routes
// Description: houses all routes for the blog api

const express = require("express");
const router = express.Router();
const blogModel = require('../models/blog');


/*
	Schema: 
	blog : {
		dateCreated : date,
		dateModified : date,
		
	}

*/


// define routes
router.get("/", (req, res) => {
    try{
	res.status(200).send(
	    "Welcome to the blog api"	
	);
    }catch(err){
	res.status(400).json({
	    message: "Some error occured",
	    err
	});
    }
});

router.get("/test", (req, res) => {
		return "hi";
});


module.exports = router;
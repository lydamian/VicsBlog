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

/*
router.get("/test", (req, res) => {
		return "hi";
});
*/

router.get("/getAllBlogs", async (req, res) => {
    try{
    	let allBlogs = await blogModel.getAllBlogs();
		res.status(200).json({
			result : allBlogs,
		});
    }catch(err){
	res.status(400).json({
	    message: "Some error occured",
	    err
	});
    }
});

router.post("/createBlog", async (req, res) => {
	try{
		// get params
		let {title, content, author, email} =  req.body;
    	let dateCreated =  new Date().toISOString();
    	let dateModified = new Date().toISOString();
    	let status = await blogModel.createBlog(title, content, dateCreated, dateModified, author, email);
	    res.status(200).json({
	    	status
	    });

	}
	catch(err){
    	res.status(400).json({
    		err,
    		msg : "error creating blog",
    	});

	}
});

router.get("/getOneBlogById", async (req, res) => {
    try{
    	let {blogId} = req.query;
    	let blog = await blogModel.getOneBlogById(blogId);
		res.status(200).json({
			result : blog,
		});
    }catch(err){
	res.status(400).json({
	    message: "Some error occured",
	    err
	});
    }
});

router.get("/test", async (req, res) => {
	console.log("test function just got hit");
	let value = 1;
	//res.status(200).send("wtf");

	 // blogModel.test(value, (newValue) => {
	 // 	res.status(200).json({
	 // 		newValue
	 // 	}
	 // 	);
	 // });
	 try{
			let someValue = await blogModel.test(value);
			console.log(someValue);
				 res.status(200).json(
				 	{
				 		someValue
				 	});
				 }
	 catch(err){
	 	res.status(400).send(
	 		"some error occured");
	 }
	 
	
});

module.exports = router;
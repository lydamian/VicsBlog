// filename: blog.js
// folder: model
// Description: this file houses all the model functions for the blog api

const MongoClient = require('mongodb').MongoClient;
const DB = require('../config/db');
const CONNECTION_URL = DB.getMongoUri();
const validator = require('../classes/validation');
var ObjectId = require('mongodb').ObjectId;


/*
	Schema:
	'Blog' : {
	title: string,
	content: string,
	date_created: date,
	date_modified: date,
	author: string,
	email : string,
	rating : int out of 5 stars,
	popularityScore : int,
	categories : array() {
		food, travel, film, people, news, 
	},

	view hit : int, 
	thumbs up: int , 
	thumbs down : int, 
	comments : array of strings
	blog_id: int <- primary key auto_increment
}
*/

const sampleData = {
	"_id":{"$oid":"5d574fa01c9d440000d2f146"},
	"title":"sampleTitle","content":"Lets pretend that this is some meaningful content",
	"author":"Damian Ly",
	"rating":{"$numberInt":"5"},
	"popularityScore":{"$numberInt":"100"},
	"categories":["food","travel","film","people","news","sports","technology","school","life","sex","dating","love","relationships","advice","career","music","miscellaneos"],
	"viewCount":{"$numberInt":"0"},
	"thumbsUpCount":{"$numberInt":"0"},
	"thumbsDownCount":{"$numberInt":"0"},
	"dateCreated":{"$date":{"$numberLong":"1565938800000"}},
	"dateModified":{"$date":{"$numberLong":"1565938800000"}}
};

function test(data, callback){
	let newValue = data+1;
	callback(newValue);
}

async function getAllBlogs(){
	try{
		const client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('Blog');
		let result = await collection.find({}).toArray();
		return result;
	}
	catch(err){
		console.log("error retrieving All Blogs");
		return err;
	}
}

async function getOneBlogById(blogId){
	try{
		let blogIdObj = await new ObjectId(blogId);
		let query = {_id : blogIdObj};
		const client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('Blog');
		let result = await collection.findOne(query);
		return result;
	}
	catch(err){
		console.log("error retrieving one Blog");
		throw err;
	}
}

async function getBlogsAfterDate(someDate){
	return "getting all blogs after date: " + someDate;
}

async function getBlogsBeforeDate(someDate){
	return "getting all blogs before date: " + someDate;
}

async function getMostPopularBlog(){ // this should be interseting how to do this?
	return "getting most popular blog";
}

async function getMostRecentBlog(){
	return "getting most recent blog";
}

async function getBlogsBetweenDates(startDate, endDate){
	return "getting blogs between dates: " + startDate + " , " + endDate;
}

async function createBlog(title, content, dateCreated, dateModified, author, email, 
		rating = 0, popularityScore = 0, categories = [], viewHit = 0, thumbsUpCount = 0, thumbsDownCount = 0, comments = []){
	let url = CONNECTION_URL;
	try{
		// validate the content;
		if(!validateBlog(title, content, dateCreated, dateModified, author, email, 
			rating, popularityScore, categories, viewHit, thumbsUpCount, thumbsDownCount, comments)){throw "invalid blog format"};
		
		let newBlog = {
			title : title,
			content: content, 
			author : author,
			email : email,
			rating : rating, 
			popularityScore : popularityScore,
			viewHit :  viewHit,
			thumbsUpCount : thumbsUpCount,
			thumbsDownCount : thumbsDownCount,
			comments : comments,
			categories : categories,
			dateCreated : dateCreated,
			dateModified : dateModified,
		};
		
		const client = await MongoClient.connect(url, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('Blog');
		let result = await collection.insertOne(newBlog);
		return result['result']['n']; // returns the number of documents inserted
	}
	catch(err){
		console.log("error creating blog");
		console.log(err);
		throw err;
	}
}

async function deleteBlog(blogId){
	let status = 1;
	let url = CONNECTION_URL;
	try{
		let blogIdObj = await new ObjectId(blogId);
		let query = {_id : blogIdObj};
		const client = await MongoClient.connect(url, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('Blog');
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

async function updateBlog(blogId, values){
	return "update Blog called...";
	let url = CONNECTION_URL;
	let status = 1;
	try{
		let objvalues = JSON.parse(values);
		let query = { email : email };
	    let newValues = { $set: objvalues };
		const client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true });
		const db = await client.db('VictoriaDB');
		let collection = await db.collection('EmployeeUser');
		let result = await collection.updateOne(query, newValues);
		return result['result']['n']; // returns the number of documents inserte
	}
	catch(err){
		console.log("error updating employee " + email);
		return -1;
	}
}

/* crud methods */
function validateBlog(title, content, date_created, date_modified, author, email, 
		rating = 0, popularityScore = 0, categories = [], viewHit = 0, thumbsUpCount = 0, thumbsDownCount = 0, comments = []){
	let status = true;
	status = status && validator.isValidEmail(email)
				&& validator.isValidName(author)
				&& validator.isValidHeader(title)
				&& validator.isValidHeader(content)
				&& validator.isValidDate(date_created)
				&& validator.isValidDate(date_modified)
				&& Number.isInteger(rating)
				&& Number.isInteger(popularityScore)
				&& Number.isInteger(viewHit)
				&& Number.isInteger(thumbsUpCount)
				&& Number.isInteger(thumbsDownCount)
				&& Array.isArray(categories)
				&& Array.isArray(comments);
	return status;
};

module.exports = {
	test : test,
	getAllBlogs : getAllBlogs, 
	getOneBlogById : getOneBlogById,
	getBlogsAfterDate : getBlogsAfterDate,
	getBlogsBeforeDate : getBlogsBeforeDate,
	getMostPopularBlog : getMostPopularBlog,
	getMostRecentBlog : getMostRecentBlog,
	getBlogsBetweenDate : getBlogsBetweenDates,
	createBlog : createBlog, 
	deleteBlog : deleteBlog,
	updateBlog : updateBlog,
	validateBlog : validateBlog,
};
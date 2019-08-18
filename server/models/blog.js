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
}

async function getBlogsBeforeDate(someDate){

}

async function getMostPopularBlog(){ // this should be interseting how to do this?

}

async function getMostRecentBlog(){

}

async function getBlogsBetweenDates(startDate, endDate){

}

async function createBlog(title, content, date_created, date_modified, author){

}

async function deleteBlog(blogId){

}

async function updateBlog(blogId, values){

}

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
};
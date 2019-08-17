// filename: blog.js
// folder: model
// Description: this file houses all the model functions for the blog api

/*
	Schema:
	'Blog' : {
	title: string,
	content: string,
	date_created: date,
	date_modified: date,
	author: string,
	rating : int out of 5 stars,
	popularityScore : int,
	categories : array() {
		food, travel, film, people, news, 
	}
	blog_id: int <- primary key auto_increment
}
*/

/* need to create another table to store the meta data about mongodb blogs 
	- can use this information to do research on what people are intersted in and why, create machine learning models
	- view hit,
	- thumbs up
	- thumbs down
*/


async function getAllBlogs(){

}

async function getOneBlogById(blogId){

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
	getAllBlogs : getAllBlogs, 
	getOneBlogById : getOneBlogById,
	getBlogsAfterDate,
};
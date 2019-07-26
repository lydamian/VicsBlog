/*test model function */
const Express = require("express");

// scheme

// model functions
function my_default(){
	return {
		test: "someTest"
	}
}

module.exports.my_default = my_default;
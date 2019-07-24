var mongoose = require('mongoose');
mongoose.connect('mongodb://yourDatabaseURI');

module.exports = {
	database : mongoose;
}
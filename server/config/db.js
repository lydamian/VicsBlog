
/* SPECIFIES THE DATBASE URI */

const mongodbURI = "mongodb+srv://new-user:test@victoriacluster-jjdcv.mongodb.net/test?retryWrites=true&w=majority";

function getMongoUri(){
	return mongodbURI;
}

function getMongoUriForUserAndPass(username, password){
	return "mongodb+srv://" + username + ":" + password + "@victoriacluster-jjdcv.mongodb.net/test?retryWrites=true&w=majority";
}

module.exports = {
    mongoURI : mongodbURI,
    getMongoUri : getMongoUri,
    getMongoUriForUserAndPass: getMongoUriForUserAndPass,
};

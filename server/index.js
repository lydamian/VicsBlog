
/* ======= LIBRARIES =========== */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require("morgan");

const MongoClient = require('mongodb').MongoClient;

//importing routes
const testRouter = require('./routes/test');
const playersRouter = require("./routes/players");

/* ======= IMPORTED RESOURCES =========== */
const PORTS = require('./config/serverPort.js');
const DBS = require('./config/db.js');

/* ======= CONSTANTS =========== */
const PORT = PORTS.serverPort;
const DB = DBS.mongoURI;
const CONNECTION_URL = "mongodb+srv://new-user:test@victoriacluster-jjdcv.mongodb.net/test?retryWrites=true&w=majority"



/* ======= MIDDLEWARE =========== */
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())

// listening on some port
app.listen(PORT, function(){
    console.log("Running on PORT: " + PORT);
});

//routes
app.use("/players", playersRouter);
app.use("/test", testRouter);


// quick tests
app.get('/testMongo', (req, res) => {
   res.send(DB); 
});

//testing routes

const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true });
client.connect(err => {
  if(err){
	console.log("error connecting to the database");
  }
  else{
	// perform actions on the collection object
	const db = client.db('Test');
	const collection = db.collection('TestCollection');
	console.log(collection.find());
  }
  client.close();
});

// closing client
client.close();

//default route
app.get('*', (req, res) => {
   res.send("Sorry this route is not defined..."); 
});

// exporting the app
module.exports = app;

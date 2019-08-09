
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
const employeeRouter = require("./routes/employee");
const defaultRouter = require("./routes/default");

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
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json());
app.use(cookieParser())

var myLogger = function (req, res, next) { // mabye do something like this for authentication?
  console.log('This middleware has been hit!');
  next()
}

app.use(myLogger)

// listening on some port
app.listen(PORT, function(){
    console.log("Running on PORT: " + PORT);
});

//routes
app.get('/', function(req, res){ // default homepage route
   res.send("Hello, this is the default route... keep going on...");
});
app.use("/players", playersRouter);
app.use("/test", testRouter);
app.use("/employee", employeeRouter);

//default route
app.use('*', defaultRouter);
app.get('*', (req, res) => {
   res.send("Sorry this route is not defined..."); 
});

// exporting the app
module.exports = app;

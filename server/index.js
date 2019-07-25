
/* ======= LIBRARIES =========== */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const playersRouter = require("./routes/players");
const mongoose = require("mongoose");

/* ======= IMPORTED RESOURCES =========== */
const PORTS = require('./config/serverPort.js');
const DBS = require('./config/db.js');

/* ======= CONSTANTS =========== */
const PORT = PORTS.serverPort;
const DB = DBS.mongoURI;

/* ======= MIDDLEWARE =========== */
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// listening on some port
app.listen(PORT, function(){
    console.log("Running on PORT: " + PORT);
});

//routes
app.use("/players", playersRouter);


// quick tests
app.get('/testMongo', (req, res) => {
   res.send(DB); 
});

app.get('*', (req, res) => {
   res.send("Sorry this route is not defined..."); 
});

//test connecting to the database


// exporting the app
module.exports = app;

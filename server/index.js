const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const CONFIG = require('./config/serverPort.js');
const playersRouter = require("./routes/players");

// constants
const PORT = CONFIG.serverPort;

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/players", playersRouter);

app.listen(PORT, function(){
    console.log("Running on PORT: " + PORT);
});

module.exports = app;

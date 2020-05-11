// Dependencies
//====================
var express = require("express");
var path = require("path");
var fs = require("fs");
var db = require("./db/db.json");

// Express app
//====================
var app = express();
var PORT = 3000;

// Middleware
//====================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
//====================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

app.get("/api/notes", function(req, res) {
    return res.json(db);
  });





// Start server
//====================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


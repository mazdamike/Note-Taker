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
app.use(express.static('public'));

// HTML Routes
//====================
// Home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// API Routes
//====================
// Return saved notes as JSON
app.get("/api/notes", function (req, res) {
    return res.json(db);
});

// Save new notes to db and return new note
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newNote = JSON.stringify(req.body);
    // var noteId = 1;
    // newNote.id = noteId;
        
    
    db.push(JSON.parse(newNote));
    console.log(db);
    return res.json(newNote);
  });

// Delete notes
// app.delete("/api/notes/:id", function(req, res) {
//   function removeNote() = newNote.filter(note) {
//   if (note.id === noteId) {
     
   
//   }
// }
// });


// Start server
//====================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
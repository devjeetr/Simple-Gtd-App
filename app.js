var express = require('express');
var path = require('path');

var mongoose = require("mongoose");

var db = require('./models/db');

require("./models/Task");
require("./models/Project");

var multer = require("multer");
var bodyParser = require("body-parser");


var app = express();

//body parser and multer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

//making public directory available
app.use(express.static(path.join(__dirname, 'public')));


var Project = mongoose.model("myprojects");

//
//Routing
//


app.get("/projects", function(req, res){
    Project.find(function(err, projects){
      if(err){
        return next(err);
      }
      res.json(projects);
    });

});

app.post("/projects", function(req, res){
  var newProject = new Project(req.body);
  newProject.save();
  console.log(newProject);
  res.redirect("/index.html");
});



var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
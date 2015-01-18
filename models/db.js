var mongoose = require('mongoose');

var dbURL = "mongodb://localhost/simple-gtd-app";

mongoose.connect(dbURL);


mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURL);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});


console.log("hullo");

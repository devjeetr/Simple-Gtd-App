var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({taskName: String, subtaskList: [{subtaskName: String}]});

var Task = mongoose.model("Task", TaskSchema);
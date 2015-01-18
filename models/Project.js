var mongoose = require("mongoose");
require("./Task");

var Schema = mongoose.Schema;

var Task = mongoose.model("Task");

var ProjectSchema = new Schema({
    projectName: String,
    taskList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    dateCreated: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
});

var Project = mongoose.model("myprojects", ProjectSchema);
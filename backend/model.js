const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  time: Date,
  description: String,
});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  endDate: Date,
  completed: Boolean,
  priority: String,
  history: [EventSchema],
});

const BoardSchema = new mongoose.Schema({
  title: String,
  description: String,
  taskList: [TaskSchema],
});

const BoardModel = mongoose.model("Board", BoardSchema);

module.exports = BoardModel;

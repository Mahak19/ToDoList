const mongoose = require('mongoose'); // Importing the mongoose module

const taskSchema = new mongoose.Schema({ // Creating a new schema object for the Task model
  description: { // Defining the 'description' field
    type: String, // The type of the field is a string
    required: true // The field is required
  },
  createdAt: { // Defining the 'createdAt' field
    type: Date, // The type of the field is a date
    default: Date.now // The default value of the field is the current date and time
  }
});

const Task = mongoose.model('Task', taskSchema); // Creating a new model object for the Task model

module.exports = Task; // Exporting the Task model for use in other parts of the application
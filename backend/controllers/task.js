const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Define the taskController object to handle tasks-related functionality
const taskController = {
    // Controller function to add a new task
    addTask: async (req, res) => {
        try {
            // Extract the 'description' from the request body
            const { description } = req.body;
            
            // Create a new Task instance with the provided description
            const newTask = new Task({ description });

            // Save the new task to the database
            await newTask.save();

            // Send a success message if the task is added successfully
            res.send('Task added successfully!');
        } catch (error) {
            // Handle errors and send an internal server error status and message
            console.error('Error adding task:', error.message);
            res.status(500).send('Internal Server Error');
        }
    },

    // Controller function to retrieve all tasks
    getTasks: async (req, res) => {
        try {
            // Fetch all tasks from the database and sort them by creation date
            const tasks = await Task.find().sort({ createdAt: 'desc' });

            // Send the tasks in JSON format as the response
            res.json(tasks);
        } catch (error) {
            // Handle errors and send an internal server error status and message
            console.error('Error fetching tasks:', error.message);
            res.status(500).send('Internal Server Error');
        }
    },
};

// Export the taskController for use in other parts of the application
module.exports = taskController;

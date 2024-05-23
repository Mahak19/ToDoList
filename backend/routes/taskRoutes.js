const express = require('express'); // Importing the express module
const taskController = require('../controllers/task'); // Importing the task controller module

const router = express.Router(); // Creating a new router object

// Adding a new task
router.post('/addTask', taskController.addTask);

// Getting all tasks
router.get('/getTasks', taskController.getTasks);

// Exporting the router object
module.exports = router;
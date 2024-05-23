import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

const TodoApp = () => {
  //Creating array for adding new tasks
  const [tasks, setTasks] = useState([]);
  //Setting newTask to empty by default so that the input will box will be empty
  const [newTask, setNewTask] = useState('');


  //For handling and adding task
  const handleAddTask = () => {
    //To empty the input box and if it is not null then add task
    if (newTask.trim() !== '') {
      //Array created for adding new tasks
      setTasks([...tasks, newTask]);
      //After adding new task set it to null
      setNewTask('');
    }
  };

  return (
    <div className="todo-container">
      <h1 className="main-heading">To Do List App</h1>
      <div className="input-container">
        <label className='labelTask' htmlFor="taskInput">Enter Task: </label>
        {/* When Add Task button is triggered then onChange is used to setNewTask here we can write the task */}
        <input
          type="text"
          id="taskInput"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add Task"
        />
        {/* Button used to add task and handling them when onClick is triggered */}
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {/* Task List which is used for adding tasks and creating the list of tasks inside a box  */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-box">
            {task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;

// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task
function addTask(title, description) {
  const task = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: false
  };
  tasks.push(task);
  console.log('Task added:', task);
  displayTasks();
}

// Function to mark a task as completed
function markAsCompleted(taskId) {
  const task = tasks.find(item => item.id === taskId);
  if (task) {
    task.completed = true;
    console.log('Task marked as completed:', task);
    displayTasks();
  } else {
    console.log('Task not found!');
  }
}

// Function to delete a task
function deleteTask(taskId) {
  const index = tasks.findIndex(item => item.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log('Task deleted');
    displayTasks();
  } else {
    console.log('Task not found!');
  }
}

// Function to display tasks
function displayTasks() {
  console.log('Tasks:');
  tasks.forEach(task => {
    console.log(`${task.id}. ${task.title} - ${task.description} [${task.completed ? 'Completed' : 'Incomplete'}]`);
  });
}

// Add some tasks
addTask('Task 1', 'Description of Task 1');
addTask('Task 2', 'Description of Task 2');
addTask('Task 3', 'Description of Task 3');

// Mark a task as completed
markAsCompleted(2);

// Delete a task
deleteTask(1);

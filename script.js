// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Edit an existing task
function editTask(button) {
    const taskItem = button.parentElement;
    const taskSpan = taskItem.querySelector('span');
    const newTask = prompt('Edit your task:', taskSpan.textContent);

    if (newTask !== null && newTask !== '') {
        taskSpan.textContent = newTask;
    }
}

// Delete a task from the list
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

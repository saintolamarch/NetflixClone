
// Function to add a new task
function addTask() {
    let taskInputField = document.getElementById("taskInput");
    let listItems = document.getElementById("taskList");

    // Validate input
    if (!listItems) {
        console.error("Task list element not found!");
        return;
    }

    let taskValue = taskInputField.value.trim();
    if (taskValue === "") {
        alert("Please enter a new task");
        return;
    }

    // Check for duplicate tasks
    let tasks = Array.from(listItems.children).map(item => item.textContent.trim().replace("Remove", ""));
    if (tasks.includes(taskValue)) {
        alert("This task already exists!");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskValue;

    // Add a remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        deleteTask(li);
    };
    li.appendChild(removeButton);

    // Make the task editable
    li.onclick = function () {
        editTask(li);
    };

    // Append the new task to the list
    listItems.appendChild(li);

    // Clear the input field
    taskInputField.value = "";

    // Save tasks to local storage
    saveTasksToLocalStorage();
}

// Function to delete a task
function deleteTask(taskElement) {
    let listItems = document.getElementById("taskList");
    listItems.removeChild(taskElement);

    // Save tasks to local storage after deletion
    saveTasksToLocalStorage();
}

// Function to edit a task
function editTask(taskElement) {
    let currentText = taskElement.childNodes[0].nodeValue.trim(); // Get the text content of the task
    let newText = prompt("Edit your task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        taskElement.childNodes[0].nodeValue = newText.trim(); // Update the text content

        // Save tasks to local storage after editing
        saveTasksToLocalStorage();
    }
}

// Function to clear all tasks
function clearAllTasks() {
    let listItems = document.getElementById("taskList");
    listItems.innerHTML = ""; // Remove all child elements

    // Clear tasks from local storage
    localStorage.removeItem("tasks");
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    let listItems = document.getElementById("taskList");
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks) {
        storedTasks.forEach(taskText => {
            let li = document.createElement("li");
            li.textContent = taskText;

            // Add a remove button
            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.onclick = function () {
                deleteTask(li);
            };
            li.appendChild(removeButton);

            // Make the task editable
            li.onclick = function () {
                editTask(li);
            };

            listItems.appendChild(li);
        });
    }
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    let listItems = document.getElementById("taskList");
    let tasks = Array.from(listItems.children).map(item => item.textContent.trim().replace("Remove", ""));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addTaskButton").addEventListener("click", addTask);
    document.getElementById("clearAllTasksButton").addEventListener("click", clearAllTasks);

    // Load tasks from local storage when the page loads
    loadTasksFromLocalStorage();
}); 
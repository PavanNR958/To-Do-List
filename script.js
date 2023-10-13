const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task before adding it to the list.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

// Mark task as complete
function completeTask(taskNumber) {

    let taskInput = document.getElementById("task" + taskNumber);

    // Toggle completed class
    taskInput.classList.toggle("completed");

    // Loop through all tasks and apply same styling logic
    let allTasks = document.querySelectorAll("input");

    for (let i = 0; i < allTasks.length; i++) {

        if (allTasks[i].classList.contains("completed")) {
            allTasks[i].style.backgroundColor = "#d3ffd3"; // light green
        } else {
            allTasks[i].style.backgroundColor = "white";
        }
    }
}


// Remove task
function removeTask(taskNumber) {

    let taskInput = document.getElementById("task" + taskNumber);

    // Hide task
    taskInput.parentElement.style.display = "none";
}

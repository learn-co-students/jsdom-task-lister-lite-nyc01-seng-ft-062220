document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  //const newTaskPriority = document.querySelector('input [type="submit"]')

  const newTaskUl = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li");
  const delButton = document.createElement("button")
  newTask.innerText = newTaskDescription.value 

  appendNewTask(newTask);
  event.target.reset();

  document.getElementsByTagName('li').append(delButton)
  //deleteButton(delButton);
  //event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
}

//const deleteButton = task => {
//  document.getElementsByTagName('li').appendChild(task)
//}







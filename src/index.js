

document.addEventListener("DOMContentLoaded", function() {



//some function to be called from listener
// find the element or class where we will insert todo item 


// result of text field input

document.addEventListener("submit", function() {
  renderTodo()
});
});
 
 
 
 
 function renderTodo() {
  event.preventDefault();
  const taskLi = document.createElement('li')
  let taskItem = document.getElementById("new-task-description")
  
  button = document.createElement("button");
  button.className = "delete";
  button.innerHTML = "Delete";
  taskLi.innerHTML = taskItem.value
  taskUl = document.getElementById('tasks')
  taskUl.appendChild(taskLi).appendChild(button); 
  }
 
 
  document.addEventListener("delete", function() {
  console.log("delete that shiz")

  });

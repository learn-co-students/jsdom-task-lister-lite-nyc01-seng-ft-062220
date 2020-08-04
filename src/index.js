document.addEventListener("DOMContentLoaded", () => { 
 const form = document.getElementById("create-task-form");
 form.addEventListener("submit", createTask);

});

createTask = event => { event.preventDefault();
  const inputField = document.getElementById("new-task-description");
  const listUl = document.getElementById("tasks");
  const listLi = document.createElement("li");
  listUl.append(listLi)
  listLi.innerText = inputField.value;

  // event.target.reset();
}



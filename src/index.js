document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.querySelector('#tasks')
  let taskForm = document.querySelector('#create-task-form');
  // let submitButton = taskForm.lastElementChild;
  let newTask = document.getElementById('new-task-description');
  let taskInput = newTask.value
  // console.log(newTask)
  // console.log(submitButton)
  taskForm.addEventListener('submit', function (event){
    let newMessage = document.createElement("li")
    newMessage.innerText = newTask.value
    tasks.appendChild(newMessage)
     event.preventDefault();
     newTask.value = ""

     deleteTask = document.createElement('button')
     deleteTask.innerText = 'x'
     newMessage.append(deleteTask)

     deleteTask.addEventListener('click', function(event){
      //deletetask is child of newMessage
      let listItem = event.target.parentNode
      console.log(event.target.parentNode)
      listItem.remove()
     })
     


  // console.log(event)     

});
});



// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
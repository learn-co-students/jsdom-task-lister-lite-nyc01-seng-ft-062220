document.addEventListener("DOMContentLoaded", () => {
  
  //event listener for the submit button
  const main = document.querySelector("#main-content");
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  const colorList = document.getElementById("colors");


  taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    //add logic to grab new-task-description and add to tasksUl
      const newTask = document.querySelector("#new-task-description").value; //asign text
      const newUser = document.querySelector("#new-user").value; //asign user
      const textColor = colorList.value; //assign color

    //create it onto each list node
    taskList.innerHTML += `<li class=${textColor}> User: ${newUser}, Task:${newTask}
      <button data-action="delete"> x </button>
    </li>`

    taskForm.reset();
    //apply the sort!
    sortList(taskList);
  })  

  taskList.addEventListener("click", function(e){
      if (e.target.dataset.action === "delete"){
        //go up one to parent element (li)
          e.target.parentElement.remove();
      }
  })

  function sortList(){
    const tasks = document.querySelector('#tasks'),
    items = document.querySelectorAll('#tasks > li');
    for (let i = 0, arr = ['red-color', 'yellow-color', 'green-color']; i < arr.length; i++) {
      for (let j = 0; j < items.length; j++) {
          if (~(" " + items[j].className + " ").indexOf(" " + arr[i] + " "))
              tasks.appendChild(items[j]);
      }
  }
  }


});

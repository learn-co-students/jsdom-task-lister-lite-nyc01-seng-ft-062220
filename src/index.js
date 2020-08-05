document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTaskDesc =  document.querySelector("#new-task-description");
  const newTaskForm = document.getElementById("create-task-form");

  const taskList = document.querySelector("#tasks"); //I'm an ul

  newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.createElement('li');
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    newTask.innerText = newTaskDesc.value;
    newTask.classList.add("task");
    taskList.appendChild(newTask);
    newTask.appendChild(button);
    button.onclick = function(event){
      newTask.remove();
    };
    const dropdownMenu = document.createElement("select");
    dropdownMenu.innerHTML = ` <select id="priority">
                               <option value="red">High</option>
                               <option value="yellow">Medium</option>
                               <option value="green">Low</option>
                              </select>
                              `;
    newTask.appendChild(dropdownMenu);
    function changeTextColor(event) {
      newTask.style.color = event.target.value; 
    }
    dropdownMenu.addEventListener("change", changeTextColor);
    
    const sorter = document.querySelector("#list >button")
    sorter.addEventListener('click', function(e){
      
      const tasks = Array.from(document.getElementsByClassName("task"));
      tasks.sort(function(taskA,taskB){
        const colorToNumberMap = {
          red: 0, yellow: 1, green: 2
        };
        const priorityA = colorToNumberMap[taskA.style.color];
        const priorityB = colorToNumberMap[taskB.style.color];
        return priorityA - priorityB;
      });
    });



    

    // sort tasks in ascending order based on priority
    

  });


});


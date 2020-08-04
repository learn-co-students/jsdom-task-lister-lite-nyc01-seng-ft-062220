document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const taskList = document.querySelector("#tasks")
    const taskLi = document.createElement("li")
    taskLi.innerText = document.querySelector("#new-task-description").value
    const taskButton = document.createElement("button")
    taskButton.innerHTML = `<type="button" class="delete">delete`
    taskList.append(taskLi)
    taskLi.append(taskButton)

    const lastButton = document.querySelector("#list li:last-child > button")
    callDeleteEventListener(lastButton)

    const dropDown = document.createElement("select")
    dropDown.innerHTML = `<name="priority" class="priority">
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>`
    taskLi.append(dropDown)

    const lastDropDown = document.querySelector("#list li:last-child > select")
    callDropDownEventListener(lastDropDown)
  })

  function callDeleteEventListener(lastButton){
    lastButton.addEventListener('click',function(e) {
      lastButton.parentNode.remove();
    })
  }

  function callDropDownEventListener(selection){
    selection.addEventListener('change',function(e){
      if (selection.value == "high"){
        selection.parentNode.style.color = "red"
      } else if (selection.value == "medium"){
        selection.parentNode.style.color = "yellow"
      } else {
        selection.parentNode.style.color = "green"
      }
    })
  }

  const sorter = document.querySelector("#list > button")
  sorter.addEventListener('click', function(e){
    let tasks = document.querySelectorAll("#tasks > li")
    let taskList = document.querySelector("#tasks")
    for (let i = 0; i < tasks.length; i++) {
      if(tasks[i].style.color == "red") {
        tempLi = tasks[i] 
        tasks[i].remove()
        taskList.prepend(tempLi)
      } else if (tasks[i].style.color == "green") {
        tempLi = tasks[i] 
        tasks[i].remove()
        taskList.append(tempLi)
      }
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  
  //event listener for the submit button
  const newTaskForm = document.getElementById("create-task-form");
  const elementTask = document.getElementById("new-task-description");
  const formList = document.getElementById("list");
  const colorList = document.getElementById("cars");


  newTaskForm.addEventListener("submit", (x) => {
    x.preventDefault(); 
    //add logic to grab new-task-description and add to tasksUl
      let ul = document.getElementById("list");
      let li = document.createElement("li");
      let button = document.createElement("button");
      button.innerHTML = "delete";
      li.appendChild(document.createTextNode(elementTask.value));
      li.appendChild(button);
      li.className = colorList.value; //assign color
      ul.appendChild(li);

      button.addEventListener("click", function(e){
        li.remove();
      });
  })


  function deleteItem(sel_id) {
    formList.addEventListener("click", (x) => {
      x.preventDefault(); 
      let li = document.getElementById("li")[sel_id];
      li.remove();
    })
  }

  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("tasks");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("li");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        
        if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
          /* if next item is numerically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }



});

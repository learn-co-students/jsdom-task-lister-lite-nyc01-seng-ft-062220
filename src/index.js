//const form = document.getElementById('create-task-form');


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form');
  const formSubmit = form.querySelector("input[type='submit']");

  
  formSubmit.addEventListener("click", function(e) {
    let desc = document.getElementById('new-task-description');
    addStuffToDom(desc);
    e.preventDefault();
  });
  

  function addStuffToDom(desc) {
    const content = document.getElementById("tasks");
    // question: let vs const
    let newLi = document.createElement("li");
    newLi.textContent = desc.value;
    content.append(newLi)
    // creating delete button here
    let buttonNew = document.createElement("button")
    buttonNew.type = "button"
    buttonNew.textContent = "x"
    newLi.append(buttonNew);
    buttonNew.addEventListener("click", function(e){
      newLi.remove();
    })
    // delOnUserClick();
  //   newLiButton.addEventListener("click", function(e) {
  //  // delete me

  // });
  // clears input field for UI experience
  desc.value = ""
  }

  // function delOnUserClick() {
  //   const buttons = document.querySelectorAll("#tasks button");
  //   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

  //   for (const button of buttons) {
  //     button.addEventListener("click", (e) => {
  //       console.log(e)
  //     })
  //   }
  // }

  
});
  

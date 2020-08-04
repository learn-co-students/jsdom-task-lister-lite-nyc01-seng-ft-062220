document.addEventListener("DOMContentLoaded", () => {
  // your code here

const taskBar = document.getElementById("create-task-form")
const taskText = document.getElementById("new-task-description");
const list = document.querySelector("ul");
const dropDown = document.getElementById("options")


taskBar.addEventListener("submit", function(e){
 
  e.preventDefault();
  
  list.appendChild(addList(taskText.value));
  taskText.value =""  
 dropDown.value = ""}
)

function addList(string){
  let node = document.createElement("li");
  let button =  document.createElement("button");

  button.innerHTML = "delete";
  node.appendChild(document.createTextNode(`${string}`));
  node.appendChild(button);

  button.addEventListener("click", function(e){
    
    node.remove();
  });
  console.log(dropDown.value)
  node.style.border = pickColor(dropDown.value)
  return node;
}

function pickColor(value){ 
  let colors = {"High": "thick solid green", "Medium": "thick solid Orange","Low": "thick solid blue"}; 
  return colors[value] }



// function addDropDown(){
//   let dropDown= document.createElement("select"),
//   priority = ["High","Medium","Low"];
  
//   for (let i = 0; i < priority.length; i++){
//     let option = document.createElement("option");
//     option.value = priority[i];
//     option.text = priority[i];
//     dropDown.appendChild(option);


//   }
//   return dropDown;
// }



})
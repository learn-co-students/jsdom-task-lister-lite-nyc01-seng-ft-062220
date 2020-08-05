document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let form = document.querySelector("form")
let input = form[0]
let submit = form[1]
let bullets = document.querySelector("#tasks")
let colors = ["red", "yellow", "green"]


submit.addEventListener("click", function(event){
  let text = input.value;
  let listbullet = document.createElement("li");
  listbullet.innerText = text;

  let button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", function(event){
    listbullet.remove()
  });

  let dropdown = document.createElement("select");
  
  makeDropdown(dropdown,text, listbullet)
  
  listbullet.append(button);
  // listbullet.append(edit);
  listbullet.append(dropdown);
  bullets.append(listbullet);

  event.preventDefault();
});




function makeDropdown(dropdown, text, listbullet){
  dropdown.innerText = "Color";
  for (const val of colors) {
    let option = document.createElement("option");
    option.text = val;
    dropdown.appendChild(option);
  }
// console.log(text)
  dropdown.addEventListener("change", function(e){
    listbullet.style.color = `${event.target.value}`
    listbullet.className = `${event.target.value}`
    console.dir(listbullet)
    // list = document.querySelectorAll('li')
    // sorted = Array.prototype.slice.call(list);
    // sorted.sort(compare);

  });
};


// function compare(a, b) {
//   const TodosA = a.urgency;
//   const TodosB = b.urgency;

//   let comparison = 0;
//   if (TodosA > TodosB) {
//     comparison = 1;
//   } else if (TodosA < TodosB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// sorted.sort(compare);

// OO solution
document.addEventListener("DOMContentLoaded", () => {

    /*
    1. add listener (submit) to the form
    2. get text out of the form.
    3. create li
    4. post li to ul.
     */

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const todo = e.target['new-task-description'].value;
        const toDoLi = document.createElement('li');
        toDoLi.textContent = todo;
        const button = document.createElement("button")
        button.textContent = "X";
        toDoLi.append(button)

        button.addEventListener('click', function (e) {

            const taskli = e.target.parentElement
            taskli.remove()

        })


        let task = document.getElementById('tasks')

        task.append(toDoLi)



    })




});

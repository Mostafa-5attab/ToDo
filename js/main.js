let input = document.querySelector(".form_input_text");
let submet = document.querySelector(".form_input_submit");
let divTasks = document.querySelector(".tasks");

let arrayOftasks = [];

submet.onclick = function () {
    if (input.value !== "") {
        addTasksToArray(input.value);
        input.value = "";
    }
}

function addTasksToArray(tasktext) {
    const task = {
        id: Date.now(),
        titel: tasktext,
        completed: false,
    }
    arrayOftasks.push(task);
    addElementsToPageFrom(arrayOftasks);
}

function addElementsToPageFrom(arrayOftasks) {
    divTasks.innerHTML = "";
    arrayOftasks.forEach((task) => {

        let task_el = document.createElement("div");
        task_el.className = "task";

        let task_content_el = document.createElement("div");
        task_content_el.className = "content";

        task_el.appendChild(task_content_el);

        let task_input_el = document.createElement("div");
        task_input_el.className = "text";
        task_input_el.setAttribute("data-id", task.id);
        task_input_el.appendChild(document.createTextNode(task.titel));

        task_content_el.appendChild(task_input_el);

        let task_actions_el = document.createElement("div");
        task_actions_el.className = "actions";

        let task_edit_el = document.createElement("button");
        task_edit_el.className = "edit";
        task_edit_el.innerHTML = "Edit";

        let task_delete_el = document.createElement("button");
        task_delete_el.className = "delete";
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        divTasks.appendChild(task_el);

        task_delete_el.addEventListener('click', () => {
            divTasks.removeChild(task_el);
        });
    });
}




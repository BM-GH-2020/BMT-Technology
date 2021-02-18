const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();

let form = document.querySelector("form");
let userName = document.querySelector("#formGroupExampleInput");
let about = document.querySelector("#formGroupExampleInput2");
let roles = document.querySelector("#roles");
let assign = document.querySelector("#assign");
let dateField = document.querySelector("#date");
let submit = document.querySelector("#button");
let invalidation = document.querySelector(".invalid-feedback");
let validation = document.querySelector(".valid-feedback");
let status = document.querySelector("#new-task-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /* taskManager.addTask(
        userName.value,
        about.value,
        roles.value,
        assign.value,
        dateField.value
    ) */

  const clearFormFields = () => {
    userName.value = "";
    about.value = "";
    roles.value = "Select role";
    assign.value = "Assign to";
    dateField.value = "dd-mm-yyyy";
    userName.classList.remove("is-valid");
    about.classList.remove("is-valid");
    roles.classList.remove("is-valid");
    assign.classList.remove("is-valid");
    dateField.classList.remove("is-valid");
    status.classList.remove("is-valid");
  };

  let validationFailure = 0;

  if (userName.value.length < 5) {
    console.log(userName.value);
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    validationFailure++;
  } else if (userName.value.length > 5) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  }

  if (about.value.length < 4) {
    about.classList.add("is-invalid");
    about.classList.remove("is-valid");
    validationFailure++;
  } else if (userName.value.length > 4) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  }
  /* if (dateField === NaN) {
        dateField.classList.add("is-invalid"); 
      dateField.classList.remove("is-valid"); 
    } */
  if (assign.value) {
    assign.classList.remove("is-invalid");
    assign.classList.add("is-valid");
  } else if (!assign.value) {
    assign.classList.add("is-invalid");
    assign.classList.remove("is-valid");
    validationFailure++;
  }

  if (roles.value) {
    roles.classList.remove("is-invalid");
    roles.classList.add("is-valid");
  } else if (!roles.value) {
    roles.classList.add("is-invalid");
    roles.classList.remove("is-valid");
    validationFailure++;
  }

  if (status.value) {
    status.classList.add("is-valid");
    status.classList.remove("is-invalid");
  } else {
    status.classList.add("is-invalid");
    status.classList.remove("is-valid");
    validationFail++;
  }

  // If the validation fails, the function will not work

  if (validationFailure > 0) {
    validationFailure = 0;
    return;
  } else {
    console.log(status.value);
    taskManager.addTask(
      status.value,
      userName.value,
      about.value,
      roles.value,
      assign.value,
      dateField.value,
      status.value
    );

    clearFormFields();
    taskManager.render();
    taskManager.save();
  }
});

document.getElementById("tasks-list").innerHTML = taskManager.render();

let taskList = document.querySelector("#tasks-list");

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;

    let taskId = Number(parentTask.dataset.taskId);
    let task = taskManager.getTaskById(taskId);
    task.status = "DONE";
    taskManager.save();
    taskManager.render();
    
    // console.log(task.status.value);
  }
});




console.log(taskHTML);
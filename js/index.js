const taskManager = new TaskManager(0);
  

let form = document.querySelector("form");
let userName = document.querySelector("#formGroupExampleInput");
let about = document.querySelector("#formGroupExampleInput2");
let roles = document.querySelector("#roles");
let assign = document.querySelector("#assign");
let dateField = document.querySelector("#date");
let submit = document.querySelector("#button");
let invalidation = document.querySelector(".invalid-feedback");
let validation = document.querySelector(".valid-feedback");



form.addEventListener('submit', event => {
    event.preventDefault();
    
    const clearFormFields = () => {
      userName.value = "";
      about.value = "";
      roles.value = "Select role";
      assign.value = "Assign to";
      dateField.value = "";
      userName.classList.remove("is-valid");
      about.classList.remove("is-valid");
      roles.classList.remove("is-valid");
      assign.classList.remove("is-valid");
      dateField.classList.remove("is-valid");
    };


    let validationFailure = 0;


    console.log("Name: " + userName.value);
    console.log("About: " + about.value);
    console.log("Assigned to: " + assign.value);
    console.log("Date submitted: " + dateField.value);
    console.log("Role: " + roles.value);


  //validation conditions

    if (userName.value.length < 5) {
      userName.classList.add("is-invalid"); 
      userName.classList.remove("is-valid"); 
      validationFailure++;
    } else if (userName.value.length > 5) {
      userName.classList.remove("is-invalid"); 
      userName.classList.add("is-valid");
    }

    if(about.value.length < 10) {
        about.classList.add("is-invalid"); 
      about.classList.remove("is-valid");  
      validationFailure++;
    } else if (about.value.length > 10) {
        about.classList.remove("is-invalid"); 
        about.classList.add("is-valid");
      }
      
    if (dateField === NaN) {
      // dateField.classList.remove("is-invalid"); 
      dateField.classList.add("is-valid");
      
    } else if (!dateField === NaN) {
      // dateField.classList.add("is-invalid"); 
      dateField.classList.remove("is-valid"); 
    } 


    if (roles.value) {
        roles.classList.remove("is-invalid"); 
      roles.classList.add("is-valid");  
    } else if (!roles.value) {
        roles.classList.add("is-invalid"); 
        roles.classList.remove("is-valid");
      validationFailure++;
    }

     if (assign.value) {
      assign.classList.remove("is-invalid"); 
      assign.classList.add("is-valid");  
    } else if (!assign.value) {
        assign.classList.add("is-invalid"); 
      assign.classList.remove("is-valid");
      validationFailure++;
    }



  // If the validation fails, the function will not work

    if (validationFailure > 0) {
      validationFailure = 0;
      return;
    } else {

      taskManager.addTask(
        userName.value,
        about.value,
        roles.value,
        assign.value,
        dateField.value
      );
      clearFormFields();
      taskManager.render();
    }
});

// console.log(taskManager.tasks);


// const newtask = new taskManager('Apply for this job');
// console.log(newtask.tasks);


// let taskHtml = createTaskHtml('John', 'About me', 'lucy', 'Tech lead', 12/04/2021);
// console.log(taskHtml);


//Task seven

// const tasksList = document.querySelector('#tasksList')

// tasksList.addEventListener('click', (event) => {
//   if (event.target.classList.contains('respond-button')){

//     const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;

//   }

// });


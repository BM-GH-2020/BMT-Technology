
  

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
    
    let validationFailure = 0;

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
    } else if (userName.value.length > 10) {
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

    if (validationFailure === 0) {
      //taskmanager.addtask
    }
});

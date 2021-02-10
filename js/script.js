// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  

let form = document.querySelector("form");
let userName = document.querySelector("#formGroupExampleInput");
let about = document.querySelector("#formGroupExampleInput2");
let roles = document.querySelector("#roles");
let assign = document.querySelector("#assign");
let dateField = document.querySelector("#date");
let submit = document.querySelector("#button");
let invalidation = document.querySelector(".invalid-feedback");
let validation = document.querySelector(".valid-feedback");




function addClaa() {
   userName.classList.add("valid-feedback"); 
}

function removeClass() {
    about.classList.add("valid-feedback");
}

      
function editClass() {
    if (userName.length < 3) {
      userName.classList.add("invalid-feedback"); 
      userName.classList.remove("valid-feedback");    
    } else if(about.length < 10) {
        about.classList.add("invalid-feedback");
        about.classList.remove("valid-feedback");  
    }
      else if (dateField === NaN) {
        dateField.classList.add("invalid-feedback");
        dateField.classList.remove("valid-feedback"); 
    }
    
}

submit.addEventListener('click', editClass);

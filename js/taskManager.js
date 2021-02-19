//Code for displaying the task card html.
const createTaskHtml = (
  id,
  userName,
  about,
  assign,
  roles,
  dateField,
  status
) => {
  console.log(userName);
  const html = `
        <li class="card m-2"  data-task-id="${id}">
            <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <p class="card-text"> ${about} </p>
                <p class="card-text"> Assigned to: ${assign}</p>
                <p class="card-text"> Position: ${roles} </p>
                <div class="card-footer row">
                    <div class="col-6">
                        <p class="card-text"><b>${dateField}</b></p>
                    </div>
                    <div class="col-sm-4">
                        <p class="card-text"><b>${status}</b></p>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-success done-button">
                        Done
                        </button>   
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-danger delete-button">
                        Delete
                        </button>
                    </div>
                </div>
            </div>
        </li>
        `;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(id, userName, about, roles, assign, dateField, status) {
    console.log(userName);
    this.currentId++;
    const task = {
      id: this.currentId++,
      userName: userName,
      about: about,
      assign: assign,
      roles: roles,
      dateField: dateField,
      status: status,
    };
    this.tasks.push(task);
    //console.log(this.tasks);
  }

  getTaskById(taskId) {
    let foundTask;
    this.tasks.forEach((taskItem) => {
      let task = taskItem;

      if (task.id === taskId) {
        foundTask = task;
      }
      console.log(foundTask);
    });
    return foundTask;
  }

  render() {
    const tasksHtmlList = [];

    this.tasks.forEach((task) => {
      //console.log(task);
      let date = new Date(task.dateField);
      let formattedDate = `Submitted on: ${Number (
        (date.getDay(this.dateField),
        date.getMonth(this.dateField),
        date.getYear(this.dateField))
      )}`;
      let taskHTML = createTaskHtml(
        task.id,
        task.userName,
        task.about,
        task.assign,
        task.roles,
        formattedDate,
        task.status
      );
      tasksHtmlList.push(taskHTML);
    });
    let taskHtml = tasksHtmlList.join("\n");
    document.getElementById("tasks-list").innerHTML = taskHtml;
    
  }


save(){

  const tasksJson = JSON.stringify(this.tasks);
  localStorage.setItem('tasks', tasksJson);
  
  const currentId = JSON.stringify(this.currentId);
  localStorage.setItem('currentId', currentId);
}

load(){
  if (localStorage.getItem('tasks')) {
    const tasksJson = localStorage.getItem('tasks');
  
  this.tasks = JSON.parse(tasksJson);
  }
  
  if (localStorage.getItem('currentId')) {
    const currentId = localStorage.getItem('currentId');
  
  this.currentId = JSON.parse(currentId);
  }
}


deleteTask(taskId) {
  const newTasks = [];
  for (let i = 0; i < this.tasks.length; i++) {
    const task = this.tasks[i];

    if (task.id !== taskId) {
      newTasks.push(task);
    }
  }
  this.tasks = newTasks;
  }

}



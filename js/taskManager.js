//Code for displaying the task card html.
const createTaskHtml = (
  id,
  userName,
  about,
  roles,
  assign,
  dateField,
  status
) => {
  console.log(userName);
  const html = `
        <li class="card" style="min-width: 25vw" data-task-id="${id}">
            <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <p class="card-text">
                ${about}
                </p>
                <p class="card-text">${roles} To</p>
                <p class="card-text">${assign}</p>
                <div class="card-footer row">
                    <div class="col-6">
                        <p class="card-text"><b>${dateField}</b></p>
                    </div>
                    <div class="col-6">
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

  addTask(userName, about, roles, assign, dateField, status) {
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
      let formattedDate = `Submitted on: ${
        (date.getDay(), date.getMonth(), date.getYear())
      }`;
      let taskHTML = createTaskHtml(
        task.id,
        console.log(task.id),
        task.userName,
        task.about,
        task.assign,
        task.roles,
        formattedDate,
        task.status
      );
      tasksHtmlList.push(taskHTML);
    });
    let taskHtml = `${tasksHtmlList.join("\n")}`;
    document.getElementById("tasks-list").innerHTML = taskHtml;
  }
}

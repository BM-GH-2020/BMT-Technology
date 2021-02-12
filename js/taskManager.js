let createTaskHtml = (name, about, assign, roles, date) => {

    const html =
    `<li class="list-group-item">
              <div class="card" style="width: 25rem;" id="card">
                <div class="card-body">
                  <h5 class="card-title">${roles}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
                  <br />
                  <p class="card-text">${about} </p>
                  <br />
                  <h6 class="card-subtitle mb-2"> ${name}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                  <br />
                  <button type="button" class="btn btn-success"><a href="#" class="card-link">Respond</a></button>
                  <button type="button" class="btn btn-danger"><a href="#" class="card-link">Delete</a></button>
                </div>
              </div>
            </li>`;
    
    return html;

};





// Create TaskManager class

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


addTask(userName, about, roles, assign, dateField) {
    this.currentId++

    const task = {
        id: this.currentId++,
        userName: userName,
        about: about,
        assign: assign,
        roles: roles,
        dateField: dateField,
    };
    this.tasks.push(task);
    
}

render(){
    const tasksHtmlList = [];
    for (let i = 0; i < tasksHtmlList.length; i++) {
        const task = this.tasks[i];
        const date = new Date(task.dateField);
        const formattedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        const taskHtml = createTaskHtml(
            task.userName,
            task.about,
            task.assign,
            task.roles,
            formattedDate
        );
        
        tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join('\n');
    const taskList = document.querySelector("#tasksList");
    taskList.innerHTML = tasksHtml;

}

}


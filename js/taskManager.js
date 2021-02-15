let createTaskHtml = (userName, about, assign, roles, dateField) => {

    const html =
    `<li class="card  list-group-horizontal col-md-5 col-lg-5 col-xl-3 mx-2" style="min-width: 20%">
        <div class="card-body">
            <h5 class="card-title">${userName}</h5>
            <p class="card-text"> ${about}</p>
            <p class="card-text"> Position: ${roles} </p>
            <p class="card-text"> Assigned to: ${assign}</p>
            
            <div class="card-footer row">
                <div class="col-6">
                     <p class="card-text"> <b>${dateField}</b> </p>
                </div>
                <div class="col-3 col-sm-3">
                    <button class="btn btn-outline-success done-button"> Done </button>
                 </div>

            <div class="col-3">
            <button class="btn btn-outline-danger delete-button"> Delete </button>
            </div>
            
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
    for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        
        const date = new Date(task.dateField);
        const formattedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        let taskHtml = createTaskHtml(
            task.userName,
            task.about,
            task.assign,
            task.roles,
            formattedDate
        );
        
        tasksHtmlList.push(taskHtml);
    };

    let tasksHtml = tasksHtmlList.join('\n');
    
    const taskList = document.querySelector("#tasks-list");
    taskList.innerHTML = tasksHtml;

}

}



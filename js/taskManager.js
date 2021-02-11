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

}


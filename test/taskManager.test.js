const expect = chai.expect;

describe("TaskManager", () => {
  describe("addTask()", () => {
    describe("if form fields are all filled", () => {
      it("should submit the form information", () => {
        const newTask = new TaskManager(0);

        const task = {
          id: taskManager.currentId,
          name: "test",
          description: "test",
          assignedTo: "test",
          dueDate: Date.now(),
          status: "In Progress",
        };
        taskManager.addTask(
          task.name,
          task.description,
          task.assignedTo,
          task.dueDate,
          task.status
        );
        expect(taskManager.newTask[0]).to.be.eql(task);
      });
    });
  });
});

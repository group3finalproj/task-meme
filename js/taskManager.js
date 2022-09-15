const createTaskHtml = (name, description, assignedTo, dueDate) => { 
const taskOne = `<div class="card-body">
    <div id="taskName">Task Name:${name}</div>
    <div id="taskDescription">Task Description:${description}</div>
    <div id="assignedTo">Assigned To:${assignedTo}</div>
    <div id="dueDate">Date:${dueDate}</div>
    <div class="text-end">
      <button type="button" class="btn btn-success text-end mb-3">Status</button>
    </div>
  </div>`
  console.log(taskOne)
};

createTaskHtml('task six', 'finish task six', 'afomia', '9/22/2022');


class TaskManager {
  constructor(currentId = 0) {
    this.tasks = []
    this.currentId = currentId
  }

  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'TODO'
    }

    this.tasks.push(task)
  }
}



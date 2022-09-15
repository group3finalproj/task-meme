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

  render() {
    const taskHtmlList = [];
    for  (let i = 0; i <this.tasks.length; i++ ) {
      const task = this.tasks[1]

      const date = new Date(task.dueDate);

      const formattedDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.Date)

      taskHtmlList.push(taskHtml)
    }
      const tasksHtml = tasksHtmlList.join('\n');

      const tasksList = doctument.querySelector('#tasksList');

      tasksList.innerHTML = tasksHtml;
  
    
  
    
  }
  
}




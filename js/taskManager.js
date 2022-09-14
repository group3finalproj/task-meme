let createTaskHtml = (name, description, assignedTo, dueDate) => 
{const name = `<div class="mb-3 col-3">
  <h2 class="text-center">Task List</h2>
  <p class="fw-bold">Add New Task</p>
  <label for="exampleFormControlInput1" class="form-label">Task name ${description}</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" required/>
</div> `




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

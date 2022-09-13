// import { TaskManager } from './taskManager.mjs'

const taskManager = new TaskManager();
//console.log(taskManager.tasks);
//taskManager.addTask('laundry', 'catogorize', 'Natasha', '9/12/2022');
console.log(taskManager.tasks);




function onSubmit(event) {
  event.preventDefault()

  const { elements } = event.target

  const assignedTo = elements.assignedTo
  const container = assignedTo.closest('.input-container')
  const assignedToValue = assignedTo.value.toLowerCase().trim()

  if (assignedToValue !== 'natasha' && assignedToValue !== 'afomia') {
    container.classList.add('invalid')
    assignedTo.focus()
    assignedTo.select()
  } else {
    container.classList.remove('invalid')
  }
}

const form = document.getElementById('new-todo-form')

//form.addEventListener('submit', onSubmit)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.closest('.input-container')?.classList.remove('invalid')
})

function isValidForm(data) {
  if (data === 'good') {
    return data
  } else {
    return ['assignedTo']
  }
}

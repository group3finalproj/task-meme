// import { TaskManager } from './taskManager.mjs'

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

form.addEventListener('submit', onSubmit)

form.addEventListener('input', (e) => {
  e.target.closest('.input-container')?.classList.remove('invalid')
})

function isValidForm(data) {
  if (data === 'good') {
    return data
  } else {
    return ['assignedTo']
  }
}

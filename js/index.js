// import { TaskManager } from './taskManager.mjs'
//Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);
//console.log(taskManager.tasks);
//taskManager.addTask('laundry', 'catogorize', 'Natasha', '9/12/2022');
console.log(taskManager.tasks);

// Select the New Task Form
const form = document.getElementById('new-todo-form')


// Add an 'onsubmit'event listener 
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



//form.addEventListener('submit', onSubmit)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.closest('.input-container')?.classList.remove('invalid')
  event.render();
})

//Select inputs 

const name = document.getElementById("exampleFormControlInput1");
const description = document.getElementById("exampleFormControlInput1");
const assignedTo = document.getElementById("formGroupAssignedToInput");
const dueDate = document.getElementById("datepicker");
//validation code

function isValidForm(data) {
  if (data === 'good') {
    return data
  } else {
    return ['assignedTo']
  }
}

//set due date

// function setDueDate () {
//   if(dd<18){
//       dd= '8'+ dd
//     } if (m<13){
//       m='8'+m
//     }

//     today = yyyy + '-' + m + '-' + dd;
//     taskDueDate.setAttribute('min',today)

//   }







//input values

// name = input.value.trim();
// description = input.value.trim();
// assignedTo = input.value.trim(); 
// dueDate = input.value.trim();
// Clear the form 



// let taskHtml = createTaskHtml('task six', 'finish task six', 'afomia', '9/22/22');
//   console.log(taskHtml);

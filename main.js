const text = document.getElementById('text')
const addTaskButton = document.getElementById('add-task-btn')
const saveTaskButton = document.getElementById('save-todo-btn')
const listBox = document.getElementById('listBox')
const saveInd = document.getElementById('saveIndex')

let todoArray = []
displayTodo()

function displayTodo() {
  let todo = localStorage.getItem('todo')
  if (todo === null) {
    todoArray = []
  } else {
    todoArray = JSON.parse(todo)
  }

  let htmlCode = ''
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <div class='w-1/3 border border-gray-900 flex'>
        <p class='w-full text-grey-darkest'>${list}</p>
        <button onclick='edit(${ind})' class='border border-green-500 h-8 w-8'>Edit</button>
        <button onclick='deleteTodo(${ind})' class='border border-red-500 h-8 w-8'>X</button>
    </div>

    <div class='w-2/3'><input id="monday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="tuesday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="wednesday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="thursday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="friday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="saturday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="sunday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
    </div>    
      
   </div>`
  })
  listBox.innerHTML = htmlCode
}

addTaskButton.addEventListener('click', (e) => {
  e.preventDefault()
  let todo = localStorage.getItem('todo')
  if (todo === null) {
    todoArray = []
  } else {
    todoArray = JSON.parse(todo)
  }
  todoArray.push(text.value)
  text.value = ''
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
})

function deleteTodo(ind) {
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  todoArray.splice(ind, 1)
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
}

function edit(ind) {
  saveInd.value = ind
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  text.value = todoArray[ind]
  addTaskButton.style.display = 'none'
  saveTaskButton.style.display = 'block'
}

saveTaskButton.addEventListener('click', () => {
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  let id = saveInd.value
  todoArray[id] = text.value
  addTaskButton.style.display = 'block'
  saveTaskButton.style.display = 'none'
  text.value = ''
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
})

/* -- Glow effect -- */

const blob = document.getElementById('blob')

window.onpointermove = (event) => {
  const { clientX, clientY } = event

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  )
}

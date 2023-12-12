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
      <p class='w-full text-grey-darkest'>${list}</p>
      <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
      <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
      <div class="flex items-center mb-4">
        <div class='flex flex-col items-center'>
            <label for="monday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Monday</label>
            <input id="monday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="tuesday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tuesday</label>
            <input id="tuesday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="wednesday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wednesday</label>
            <input id="wednesday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="thursday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thursday</label>
            <input id="thursday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="friday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Friday</label>
            <input id="friday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="saturday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saturday</label>
            <input id="saturday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class='flex flex-col items-center'>
            <label for="sunday${ind}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sunday</label>
            <input id="sunday${ind}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
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

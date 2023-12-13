const habit = document.getElementById('text')
const addTaskButton = document.getElementById('add-task-btn')
const saveTaskButton = document.getElementById('save-todo-btn')
const listBox = document.getElementById('listBox')
const saveInd = document.getElementById('saveIndex')

const dayDictionary = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
}

let todoArray = []
displayTodo()

// goal: persist the days of the week in local storage
// goal: count the number of days streak
// todo create an object with habits, etc
//

function displayTodo() {
  let todo = localStorage.getItem('todo')
  let parsedTodo = JSON.parse(todo)
  console.log(parsedTodo)
  for (let i = 0; i < parsedTodo.length; i++) {
    console.log(parsedTodo[i])
  }

  if (todo === null) {
    todoArray = []
  } else {
    todoArray = parsedTodo
  }

  let htmlCode = ''

  todoArray.forEach((list, ind) => {
    console.log('list: ', list, 'index: ', ind)
    htmlCode += `<div class='flex mb-4 items-center gap-5'>
    <div class='w-1/3 flex items-center justify-start gap-2 border-2 border-grey-500 rounded-lg bg-indigo-500'>
        <p class=' border-2 rounded-lg w-full habit-grey-darkest m-1 line-clamp-1 overflow-hidden bg-sky-500 hover:bg-sky-700' >${list.habit}</p>
        <button onclick='edit(${ind})' class='border-2 rounded-lg border-green-500 h-8 w-8 '>Edit</button>
        <button onclick='deleteTodo(${ind})' class='border-2 rounded-lg border-red-500 h-8 w-8 mr-2 '>X</button>
    </div>

    <div class='w-2/3 flex gap-2 items-center'>
        <input id="monday${ind}" type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
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
  console.log(JSON.parse(todo))
  let parsedTodo = JSON.parse(todo)

  // if (todo === null) {
  //   todoArray = []
  // } else {
  //   todoArray = JSON.parse(todo)
  // }

  const newTodo = {
    habit: habit.value,
    days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    currentStreak: 0, // 0 - 7
    totalStreak: 0, // count of multiple current streaks
  }

  // todoArray.push(habit.value)
  todoArray.push(newTodo)
  habit.value = ''
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
  habit.value = todoArray[ind]
  addTaskButton.style.display = 'none'
  saveTaskButton.style.display = 'block'
}

saveTaskButton.addEventListener('click', () => {
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  let id = saveInd.value
  todoArray[id] = habit.value
  addTaskButton.style.display = 'block'
  saveTaskButton.style.display = 'none'
  habit.value = ''
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
})

/* -- Glow effect -- */

// const blob = document.getElementById('blob')

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 3000, fill: 'forwards' }
//   )
// }

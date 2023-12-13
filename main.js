const habit = document.getElementById('text')
const addTaskButton = document.getElementById('add-task-btn')
const saveTaskButton = document.getElementById('save-todo-btn')
const listBox = document.getElementById('listBox')
const saveInd = document.getElementById('saveIndex')
const currentStreak = document.getElementById('streaks_text')
let streakcount = 0
let toggle = false
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

function displayTodo() {
  let todo = localStorage.getItem('todo')
  if (todo === null) {
    todoArray = []
  } else {
    let parsedTodo = JSON.parse(todo)

    todoArray = parsedTodo
  }

  let htmlCode = ''

  todoArray.forEach((list, ind) => {
    console.log('list: ', list, 'index: ', ind)
    htmlCode += `<div class='flex mb-4 items-center'>
    <div class='w-1/3 flex items-center justify-start border border-grey-500 rounded-full h-auto'>
        <p class='w-full text-gray-600 m-1 line-clamp-1 flex-wrap overflow-hidden hover:overflow-visible hover:line-clamp-4 font-excalidraw text-lg pl-2' >${list.habit}</p>
            <button onclick='edit(${ind})' class= 'h-8 w-8 fa-solid fa-pen-to-square text-green-600' ></button>
            <button onclick='deleteTodo(${ind})' class='h-8 w-8 mr-2 fa-solid fa-trash-can text-red-500'></button>
    </div>
    <div class='w-2/3 flex gap-x-2 justify-around items-center'>
        <input id="sunday${ind}" ${list.days.sunday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="monday${ind}" type="checkbox" value="monday" ${list.days.monday ? 'checked' : ''} onclick='toggleDay(${ind})' class="h-8 w-8 m-1 pl-2 rounded-full ">
        <input id="tuesday${ind}" ${list.days.tuesday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="wednesday${ind}" ${list.days.wednesday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="thursday${ind}" ${list.days.thursday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
        <input id="friday${ind}" ${list.days.friday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full ml-2">
        <input id="saturday${ind}" ${list.days.saturday ? 'checked' : ''} onclick='toggleDay(${ind})' type="checkbox" value="" class="h-8 w-8 m-1 rounded-full">
       
        </div>
    </div>    
   </div>`
  })

  listBox.innerHTML = htmlCode

  todoArray.forEach((list, ind) => {
    Object.values(dayDictionary).forEach((day) => {
      const checkbox = document.getElementById(`${day}${ind}`)
       checkbox.addEventListener('change', () => toggleDay(day, ind))
          
    })
  })
}

if (toggle == true) {
  streakcount += 1
  currentStreak.innerHTML = streakcount
}


function toggleDay(day, ind) {
  if (todoArray) {
    todoArray[ind].days[day] = !todoArray[ind].days[day]
    localStorage.setItem('todo', JSON.stringify(todoArray))
    
    if (todoArray[ind].days[day] == true) {
      streakcount += 1
      currentStreak.innerHTML = streakcount
    } else {
      streakcount -= 1
      currentStreak.innerHTML = streakcount
    }
  
  }
}
currentStreak.innerHTML = streakcount

addTaskButton.addEventListener('click', (e) => {
  e.preventDefault()
  let todo = localStorage.getItem('todo')
  // validation for empty Add Thing input
  if (habit.value === '') {
    alert('Habit cannot be empty')
    return
  }
  console.log(JSON.parse(todo))
  let parsedTodo = JSON.parse(todo)

  if (todo === null) {
    todoArray = []
  } else {
    todoArray = parsedTodo
  }

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
    currentStreak: 0, // future: 0 - 7
    totalStreak: 0, // future: account of multiple current streaks
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
  habit.value = todoArray[ind].habit
  addTaskButton.style.display = 'none'
  saveTaskButton.style.display = 'block'
}

saveTaskButton.addEventListener('click', () => {
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  let id = saveInd.value
  todoArray[id].habit = habit.value
  addTaskButton.style.display = 'block'
  saveTaskButton.style.display = 'none'
  habit.value = ''
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
console.log(currentStreak + 2)
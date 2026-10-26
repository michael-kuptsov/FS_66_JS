const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');
const deleteItemButton = document.querySelector('#deleteItemButton');
const taskForm = document.querySelector('#taskForm');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = taskInput.value.trim();
    if (!task) {
        console.log('Task cant be empty');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.append(listItem);  
    taskInput.value = '';
    taskInput.focus();
}); 
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // event.target.style.textDecoration = 'line-through';
        event.target.style.textDecoration = event.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
});

// taskList.addEventListener('mouseenter', (event) => {
//     if (event.target.tagName === 'LI') {
//         event.target.style.backgroundColor = '#193cb9';
//     }
// });

deleteItemButton.addEventListener('click', (event) => {
    const completedTasks = taskList.querySelectorAll('li');
    completedTasks.forEach(task => {
        if(task.style.textDecoration === 'line-through') {
            task.remove();
        }
    });
})

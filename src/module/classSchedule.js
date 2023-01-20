import Storage from './classStorage.js';
import imgtrash from '../images/trash.svg';

const myTrash = new Image();
myTrash.src = imgtrash;

class Schedule {
  static displayTasks() {
    const tasks = Storage.getTasks();
    tasks.forEach((task) => Schedule.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector('.task-list');
    let completion = 'unchecked';
    let decoration = 'none';
    const row = document.createElement('div');
    row.appendChild(myTrash);
    row.draggable = true;
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';

    if (task.completed == true) {
      completion = 'checked';
      decoration = 'line-through'
    }

    row.innerHTML = `
        <input type="checkbox" class="check" ${completion}>
        <p class='description' title='Click to edit' style = 'text-decoration: ${decoration}'>${task.description}</p>
        <span>${task.code}</span>
        <img class="delete" src="${imgtrash}" alt="remove">
        `;
    list.appendChild(row);
  }

  static deleteTask(taskRow) {
    if (taskRow.classList.contains('delete')) {
      taskRow.parentElement.remove();
    }
  }

  static clearInput() {
    document.querySelector('#task-value').value = '';
  }
}

export default Schedule;
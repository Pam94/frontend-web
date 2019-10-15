const taskAdder = document.querySelector('.taskAdder');
const myTasks = document.querySelector('.myTasks');

const tasks = JSON.parse(localStorage.getItem('taskList'))
    || [];
outputTasks();

function saveStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

function addTask(e) {
    e.preventDefault();

    const textTask = this.querySelector('[name=task]').value;
    const task = {
        text: textTask,
        done: false
    }
    tasks.push(task);

    saveStorage();
    outputTasks();

    this.reset();
}

function outputTasks() {
    let html = tasks.map(function (data, index) {
        let myClass = data.done ? 'done' : '';
        return '<li class="' + myClass
            + '" data-index="' + index + '"><div>'
            + data.text + '<span class="remove"> x </span></div></li>';
    });

    //Join the elements of the array togheter in a string
    myTasks.innerHTML = html.join('');
    console.log(tasks);
}

function toggleDone(e) {
    const myElement = e.target;
    const myParentElement = myElement.parentElement;
    const indexElement = myParentElement.dataset.index;

    if (myElement.className === 'remove') {

        let index = myParentElement.parentElement.dataset.index;
        let temp = tasks.splice(index, 1);
        console.log(temp);

    } else {

        myParentElement.classList.toggle('done');
        tasks[indexElement].done = !tasks[indexElement].done;
    }

    saveStorage();
    outputTasks();
}

taskAdder.addEventListener('submit', addTask);
myTasks.addEventListener('click', toggleDone);


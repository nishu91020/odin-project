import '../style.css';
import NotCompletedItem from './notCompletedItem';
import CompletedItem from './completedItem';

let Items = [];
let ItemsDone = [];

export function displayList (NotCompleted, Completed) {
    NotCompleted.innerHTML = '';
    Items.forEach(item => {
        let tempItem = NotCompletedItem(item.title, item.desc, item.dueDate, item.index, NotCompleted, Completed);
        NotCompleted.appendChild(tempItem);
    });
}

export function displayDoneItemList (NotCompleted, Completed) {
    Completed.innerHTML = '';
    ItemsDone.forEach(item => {
        let tempItem = CompletedItem(item.title, item.desc, item.dueDate, item.index, NotCompleted, Completed);
        Completed.appendChild(tempItem);
    });
    displayList(NotCompleted, Completed);
}

export function doneTask (index) {
    let temp = [];
    temp = Items.splice(index, 1);
    temp.forEach(item => {
        ItemsDone.push(item);
    });
}

export function deleteItem (index) {
    Items.splice(index, 1);
}

export function deleteDoneItem (index) {
    ItemsDone.splice(index, 1);
}

function addItemToNotCompletedList (title, desc, dueDate, NotCompleted, Completed) {
    Items.push({ title, desc, dueDate });
    displayList(NotCompleted, Completed);
}

export default function ItemForm (NotCompleted, Completed) {
    console.log(Completed);
    let workForm = document.createElement('form');
    workForm.classList.add('workForm');

    let formHeading = document.createElement('div');
    formHeading.innerHTML = `<h4>Add a work to your TO-DO list</h4>`;
    formHeading.classList.add('workFormHeading');
    workForm.appendChild(formHeading);

    let title = document.createElement('input');
    title.classList.add('title');
    title.placeholder = 'Title';
    title.required = true;
    let desc = document.createElement('textarea');
    desc.classList.add('desc');
    desc.placeholder = 'Description';
    desc.required = true;
    let dueDate = document.createElement('input');
    dueDate.classList.add('dueDate');
    dueDate.placeholder = 'Due Date';
    dueDate.type = 'datetime-local';
    dueDate.required = true;

    let add = document.createElement('button');
    add.innerText = 'Add';
    add.classList.add('btn');
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btnContainer');
    buttonContainer.appendChild(add);
    add.addEventListener('click', e => {
        e.preventDefault();
        addItemToNotCompletedList(title.value, desc.value, dueDate.value, NotCompleted, Completed);
        title.value = '';
        desc.value = '';
        dueDate.value = '';
    });

    workForm.appendChild(title);
    workForm.appendChild(desc);
    workForm.appendChild(dueDate);
    workForm.appendChild(buttonContainer);
    return workForm;
}

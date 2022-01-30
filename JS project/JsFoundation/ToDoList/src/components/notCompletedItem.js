import '../style.css';
import { displayList, deleteItem, doneTask, displayDoneItemList } from './itemForm';

export default function NotCompletedItem (title, desc, dueDate, index, NotCompleted, Completed) {
    console.log(Completed);
    let ItemContainer = document.createElement('div');
    ItemContainer.classList.add('itemContainer');

    ItemContainer.innerHTML = `<h3>Title - ${title}</h3>`;
    ItemContainer.innerHTML += `Description - ${desc}`;
    ItemContainer.innerHTML += `<h5>Due Date - ${dueDate}</h5>`;

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btnContainer');
    let del = document.createElement('button');
    del.classList.add('btn');
    del.innerText = 'Delete';
    del.addEventListener('click', () => {
        deleteItem(index);
        displayList(NotCompleted, Completed);
    });

    let done = document.createElement('button');
    done.classList.add('btn');
    done.innerText = 'Done';
    done.addEventListener('click', () => {
        doneTask(index);
        displayDoneItemList(NotCompleted, Completed);
    });
    buttonContainer.appendChild(del);
    buttonContainer.appendChild(done);

    ItemContainer.appendChild(buttonContainer);
    return ItemContainer;
}

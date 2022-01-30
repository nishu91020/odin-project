import '../style.css';
import { deleteDoneItem, displayDoneItemList } from './itemForm';

export default function CompletedItem (title, desc, dueDate, index, NotCompleted, Completed) {
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
        deleteDoneItem(index);
        displayDoneItemList(NotCompleted, Completed);
    });
    buttonContainer.appendChild(del);

    ItemContainer.appendChild(buttonContainer);
    return ItemContainer;
}

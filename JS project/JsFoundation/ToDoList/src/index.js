import './style.css';
import Header from './components/header';
import ItemForm from './components/itemForm';
import NotCompletedItem from './components/completedItem';
export default function ToDoList () {
    let outerContainer = document.createElement('div');

    //page header

    outerContainer.appendChild(Header());

    //to do list container
    let listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    //2) Items in the list container
    let ItemBox = document.createElement('div');

    let NotCompleted = document.createElement('div');
    let Completed = document.createElement('div');
    // 1)Item form
    listContainer.appendChild(ItemForm(NotCompleted, Completed));

    let ItemBoxNotCompleted = document.createElement('div');
    ItemBoxNotCompleted.innerHTML = `<h4>Not Completed Tasks</h4>`;
    ItemBoxNotCompleted.classList.add('itemContainer');
    ItemBoxNotCompleted.classList.add('center-item');
    ItemBoxNotCompleted.classList.add('ItemBoxHeader');
    ItemBox.appendChild(ItemBoxNotCompleted);
    ItemBox.appendChild(NotCompleted);

    let ItemBoxCompleted = document.createElement('div');
    ItemBoxCompleted.classList.add('itemContainer');
    ItemBoxCompleted.classList.add('center-item');
    ItemBoxCompleted.innerHTML = `<h4>Completed Tasks</h4>`;
    ItemBoxCompleted.classList.add('ItemBoxHeader');
    ItemBox.appendChild(ItemBoxCompleted);
    ItemBox.appendChild(Completed);

    listContainer.appendChild(ItemBox);
    outerContainer.appendChild(listContainer);

    return outerContainer;
}

document.body.appendChild(ToDoList());

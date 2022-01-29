import './style.css';
import ListItem from '../src/components/listItem';
export default function ToDoList () {
    let outerContainer = document.createElement('div');

    //page header
    let pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');
    pageHeader.innerHTML = 'Things';
    outerContainer.appendChild(pageHeader);

    //to do list container
    let listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    // 1)Item form
    let workForm = document.createElement('form');
    workForm.classList.add('workForm');

    let formHeading = document.createElement('div');
    formHeading.innerHTML = `<h4>Add a work to your TO-DO list</h4>`;
    formHeading.classList.add('workFormHeading');
    workForm.appendChild(formHeading);

    let title = document.createElement('input');
    title.classList.add('title');
    title.placeholder = 'Title';

    let desc = document.createElement('textarea');
    desc.classList.add('desc');
    desc.placeholder = 'Description';

    let dueDate = document.createElement('input');
    dueDate.classList.add('dueDate');
    dueDate.placeholder = 'Due Date';

    let add = document.createElement('button');
    add.innerText = 'Add';
    add.classList.add('btn');
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btnContainer');
    buttonContainer.appendChild(add);

    workForm.appendChild(title);
    workForm.appendChild(desc);
    workForm.appendChild(dueDate);
    workForm.appendChild(buttonContainer);
    listContainer.appendChild(workForm);

    //2) Items in the list container
    let ItemBox = document.createElement('div');
    let ItemBoxHeader = document.createElement('div');

    ItemBoxHeader.innerHTML = `<h4>Not Completed</h4>`;
    ItemBoxHeader.classList.add('ItemBoxHeader');
    ItemBox.appendChild(ItemBoxHeader);

    ItemBox.appendChild(ListItem('coding', '2 DSA problem and 2 CP problems', '30/01/22'));
    listContainer.appendChild(ItemBox);

    outerContainer.appendChild(listContainer);

    return outerContainer;
}

document.body.appendChild(ToDoList());

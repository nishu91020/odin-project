import '../style.css';

export default function ListItem (title, desc, dueDate) {
    let ItemContainer = document.createElement('div');
    ItemContainer.classList.add('itemContainer');
    ItemContainer.innerHTML = `<h3>${title}</h3>`;
    ItemContainer.innerHTML += desc;
    ItemContainer.innerHTML += `<h5>${dueDate}</h5>`;

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btnContainer');
    let del = document.createElement('button');
    del.innerText = 'Delete';
    let done = document.createElement('button');
    done.innerText = 'Done';
    buttonContainer.appendChild(del);
    buttonContainer.appendChild(done);

    ItemContainer.appendChild(buttonContainer);
    return ItemContainer;
}

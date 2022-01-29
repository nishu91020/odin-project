import Home from '../home';
import Menu from '../menu';
import Contact from '../contact';

export function addPage (container, pageFunc) {
    container.innerHTML = '';
    let page = pageFunc();
    container.appendChild(page);
}

export default function Header (container) {
    let fixedHeader = document.createElement('div');
    fixedHeader.classList.add('header');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');
    item1.classList.add('item');
    item2.classList.add('item');
    item3.classList.add('item');

    item1.classList.add('item1');
    item2.classList.add('item2');
    item3.classList.add('item3');

    item1.innerHTML = 'Home';
    item2.innerHTML = 'Menu';
    item3.innerHTML = 'Contact';

    fixedHeader.appendChild(item1);
    fixedHeader.appendChild(item2);
    fixedHeader.appendChild(item3);

    addPage(container, Home);
    item1.addEventListener('click', () => {
        addPage(container, Home);
        console.log(container);
    });

    item2.addEventListener('click', () => {
        addPage(container, Menu);
        console.log(container);
    });

    item3.addEventListener('click', () => {
        addPage(container, Contact);
        console.log(container);
    });

    return fixedHeader;
}

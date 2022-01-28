import './style.css';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

export default function index () {
    let container = document.createElement('div');
    container.classList.add('container');
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
    container.appendChild(fixedHeader);
    let homePage = Home();
    container.appendChild(homePage);
    let MenuPage = Menu();
    container.appendChild(MenuPage);
    let ContactPage = Contact();
    container.appendChild(ContactPage);
    return container;
}

document.body.appendChild(index());

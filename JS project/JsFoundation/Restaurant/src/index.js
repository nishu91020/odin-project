import './style.css';
import Header from '../src/components/header';

export default function index () {
    let container = document.createElement('div');
    container.classList.add('container');

    let pageContainer = document.createElement('div');
    pageContainer.classList.add('container');

    container.appendChild(Header(pageContainer));

    container.appendChild(pageContainer);
    return container;
}

document.body.appendChild(index());

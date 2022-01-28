import Recipe from './components/recipe';
import Pizza from './pizza.jpg';
import './style.css';
export default function Menu () {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    let pageHead = document.createElement('div');
    pageHead.innerHTML = `<h2>Menu</h2>`;
    pageHead.classList.add('pageHead');
    menuContainer.appendChild(pageHead);
    let ItemContainer = document.createElement('div');
    ItemContainer.classList.add('itemContainer');

    ItemContainer.appendChild(
        Recipe(
            'pizza',
            'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.',
            Pizza
        )
    );
    ItemContainer.appendChild(
        Recipe(
            'pizza',
            'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.',
            Pizza
        )
    );
    ItemContainer.appendChild(
        Recipe(
            'pizza',
            'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.',
            Pizza
        )
    );
    ItemContainer.appendChild(
        Recipe(
            'pizza',
            'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.',
            Pizza
        )
    );
    menuContainer.appendChild(ItemContainer);
    return menuContainer;
}

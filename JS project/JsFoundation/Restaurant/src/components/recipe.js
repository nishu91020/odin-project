import '../style.css';

export default function Recipe (name, desc, img) {
    let recipeCrad = document.createElement('div');
    recipeCrad.classList.add('card');
    let dish = new Image();
    dish.src = img;
    dish.classList.add('dishImg');
    let dishName = document.createElement('div');
    dishName.innerHTML = name;
    dishName.classList.add('dishTitle');
    let description = document.createElement('div');
    description.innerHTML = desc;
    recipeCrad.appendChild(dish);
    recipeCrad.appendChild(dishName);
    recipeCrad.appendChild(description);
    return recipeCrad;
}

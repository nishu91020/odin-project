import './style.css';
import Restaurant from './restaurant.jpg';
export default function Home () {
    const container = document.createElement('div');
    container.classList.add('homeContainer');
    const timings = document.createElement('div');
    timings.classList.add('timings');
    timings.innerHTML = `<h4>Timings</h4>`;
    timings.innerHTML += `<li>Monday- 9am to 9pm</li>
                        <li>Tuesday- 9am to 9pm</li>
                        <li>Wednesday- 9am to 9pm</li>
                        <li>Thursday- 9am to 9pm</li>
                        <li>Friday- 9am to 9pm</li>
                        <li>Saturday- 9am to 9pm</li>`;
    let imgRes = new Image();
    imgRes.src = Restaurant;
    container.appendChild(imgRes);
    imgRes.classList.add('restaurantImg');
    container.appendChild(timings);
    return container;
}

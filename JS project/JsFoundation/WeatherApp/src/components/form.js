import '../styles.css';
import InfoCard from '../components/infoCard';

function getWeather (place, container) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=e58491b0b56e02fc09345213ecfc5063`, { mode: 'cors' })
        .then(res => {
            return res.json();
        })
        .then(data => {
            container.innerHTML = '';
            container.appendChild(InfoCard(place, data.main.temp_min, data.main.temp_max, data.main.pressure, data.main.humidity));
        })
        .catch(err => {
            console.log('error occured');
        });
}
export default function Form (container) {
    let formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    let formHeader = document.createElement('div');
    formHeader.innerHTML = `<h4>Enter Place to get Weather Reports</h4>`;
    formContainer.appendChild(formHeader);

    let place = document.createElement('input');
    place.placeholder = 'Place';
    place.type = 'text';
    place.required = 'required';
    place.classList.add('in');
    formContainer.appendChild(place);

    let btn = document.createElement('button');
    btn.innerHTML = 'Go';
    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        getWeather(place.value, container);
        place.value = '';
    });

    formContainer.appendChild(btn);
    return formContainer;
}

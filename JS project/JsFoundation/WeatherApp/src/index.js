import './styles.css';
import Header from './components/header';
import Form from './components/form';

export default function WeatherApp () {
    let container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(Header());
    let weatherReport = document.createElement('div');
    let WeatherForm = Form(weatherReport);
    container.appendChild(WeatherForm);
    container.appendChild(weatherReport);
    return container;
}

document.body.appendChild(WeatherApp());

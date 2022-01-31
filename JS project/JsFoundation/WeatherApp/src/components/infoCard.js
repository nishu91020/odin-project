export default function InfoCard (place, temp_min, temp_max, pressure, humidity) {
    let infoCard = document.createElement('div');
    infoCard.classList.add('form-container');

    let infoCardHead = document.createElement('div');
    infoCardHead.innerHTML = `<h3>Weather Report of ${place}</h3>`;

    let min_temp = document.createElement('div');
    min_temp.innerHTML = `<h5>Mininum temperature - ${temp_min}</h5>`;
    let max_temp = document.createElement('div');
    max_temp.innerHTML = `<h5>Maximum temperature - ${temp_max}</h5>`;
    let p = document.createElement('div');
    p.innerHTML = `<h5>Pressure - ${pressure}</h5>`;
    let humid = document.createElement('div');
    humid.innerHTML = `<h5>Humidity - ${humidity}</h5>`;

    infoCard.appendChild(infoCardHead);
    infoCard.appendChild(min_temp);
    infoCard.appendChild(max_temp);
    infoCard.appendChild(p);
    infoCard.appendChild(humid);

    return infoCard;
}

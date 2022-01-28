export default function Contact () {
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const timings = document.createElement('div');
    timings.classList.add('timings');
    timings.innerHTML = `<h4>Contact Us</h4>`;
    timings.innerHTML += `<li>Address- Kithaganur main road near garden city university, 4th cross balaji mandir</li>
    <li>Phone - +919916154193</li>
    <li>Email- rainishu111@gmail.com</li>`;
    timings.innerHTML += `<h4>Thankyou!! Please visite again :)</h4>`;
    contactContainer.appendChild(timings);
    return contactContainer;
}

import '../styles.css';
export default function Header () {
    let head = document.createElement('div');
    head.innerHTML = 'Weather App';
    head.classList.add('appHeader');
    return head;
}

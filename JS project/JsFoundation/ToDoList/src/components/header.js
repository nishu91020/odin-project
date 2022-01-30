import '../style.css';

export default function Header () {
    let pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');
    pageHeader.innerHTML = 'Things';
    return pageHeader;
}

import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Img from './img.jpeg';
function component () {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');
    btn.innerHTML = 'click me and check the console';
    btn.onClick = printMessage;
    element.appendChild(btn);
    // element.classList.add('hello');
    // const MyImg = new Image();
    // MyImg.src = Img;
    // element.appendChild(MyImg);
    return element;
}

document.body.appendChild(component());

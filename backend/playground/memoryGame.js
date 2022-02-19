let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let EventEmitter = require('events');
const { exit } = require('process');
let emitter = new EventEmitter();

let arr = [ 1, 2, 3, 4, 12, 34, 56, 32, 87, 91 ];
let vis = [];
const shuffler = () => {
    let l = arr.length;
    for (let i = 0; i < l - 1; i++) {
        let temp = arr[i];
        let x = Math.floor(Math.random() * (l - i - 1));
        arr[i] = arr[x];
        arr[x] = temp;
    }
};

emitter.on('shuffle', shuffler);

let flag = false;
console.log(arr.slice(0, 6));

function askQuestion () {
    readline.question('Enter a number', num => {
        vis.forEach(ele => {
            if (ele === num) {
                console.log('game over');
                flag = true;
                process.kill(process.pid, 'SIGTERM');
            }
        });
        if (!flag) {
            vis.push(num);
            emitter.emit('shuffle');
            console.log(arr.slice(0, 6));
            emitter.emit('question');
        }
    });
}
emitter.on('question', askQuestion);
emitter.emit('question');
// console.log('game started!!!');
// emitter.removeListener('shuffle', shuffler);
process.on('SIGTERM', () => {
    console.log('process terminated successfully');
    emitter.removeAllListeners('shuffle');
    emitter.removeAllListeners('question');
});

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
let listner = (name, age) => {
    console.log(`do some work name-${name} age-${age}`);
};
eventEmitter.on('do', listner);
eventEmitter.emit('do', 'Noddy', 21);

let listner1 = () => {
    console.log('hiiiiiiiiiiiii');
};
eventEmitter.on('do', listner1);
eventEmitter.emit('do');

// setTimeout(() => {
//     eventEmitter.removeListener('do', listner);
// }, 1000);

eventEmitter.removeListener('do', listner);
eventEmitter.removeAllListeners('do');
console.log(eventEmitter.listenerCount('do'));
// eventEmitter.removeListener('do',)

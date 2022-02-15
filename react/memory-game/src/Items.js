import uniqid from 'uniqid';
import Princess from './img/princess.jfif';
import Dog from './img/dog.jfif';
import Dc from './img/dc.jpg';
import Cart1 from './img/cart1.png';
import Donkey from './img/donkey.jpg';
import Fish from './img/fish.jfif';
import Mickey from './img/mickey.jpg';
import Oswald from './img/oswald.png';
import Pig from './img/pig.jpeg';
import Pinocchio from './img/pinocchio.png';
import Pooh from './img/pooh.jpg';
import Snowman from './img/snowman.jfif';
import Sponge from './img/sponge.jfif';
import Yoda from './img/yoda.jpg';

export const Items = [
    { id: uniqid(), photo: Princess, name: 'Princess', selected: false },
    { id: uniqid(), photo: Dog, name: 'Pluto', selected: false },
    { id: uniqid(), photo: Dc, name: 'Donald Duck', selected: false },
    { id: uniqid(), photo: Cart1, name: 'Stitch', selected: false },
    { id: uniqid(), photo: Donkey, name: 'Eeyore', selected: false },
    { id: uniqid(), photo: Fish, name: 'Dory', selected: false },
    { id: uniqid(), photo: Mickey, name: 'Mickey Mouse', selected: false },
    { id: uniqid(), photo: Oswald, name: 'Oswald', selected: false },
    { id: uniqid(), photo: Pig, name: 'Pigge', selected: false },
    { id: uniqid(), photo: Pinocchio, name: 'Pinocchio', selected: false },
    { id: uniqid(), photo: Pooh, name: 'Pooh', selected: false },
    { id: uniqid(), photo: Snowman, name: 'Snowman', selected: false },
    { id: uniqid(), photo: Sponge, name: 'Sponge Bob', selected: false },
    { id: uniqid(), photo: Yoda, name: 'Yoda', selected: false }
];

const players = [
    {
        name: 'player1',
        marker: 'X'
    },
    {
        name: 'player2',
        marker: 'O'
    }
];
let currPlayer = players[0];
let gameover = false;

//change turn
const changeTurn = () => {
    return currPlayer === players[0] ? players[1] : players[0];
};

//check for win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    const wins = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ];
    wins.forEach(e => {
        if (boxText[e[0]].innerText == currPlayer.marker && boxText[e[1]].innerText == currPlayer.marker && boxText[e[2]].innerText == currPlayer.marker) {
            document.querySelector('#turnDisplay').innerText = currPlayer.name + ' with symbol ' + currPlayer.marker + ' wins';
            gameover = true;
            document.querySelector('.win').getElementsByTagName('img')[0].style.width = '200px';
        }
    });
};

// place symbol
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (gameover === false) {
            if (boxText.innerText === '') {
                boxText.innerText = currPlayer.marker;
                checkWin();
                currPlayer = changeTurn();
                let info = document.getElementById('turnDisplay');
                if (gameover === false) info.innerHTML = currPlayer.name + ' with symbol ' + currPlayer.marker + ' plays now';
            }
        }
    });
});

//reset the game
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    Array.from(boxes).forEach(element => {
        let boxText = element.querySelector('.boxText');
        boxText.innerHTML = '';
    });
    document.querySelector('.win').getElementsByTagName('img')[0].style.width = 0;
    gameover = false;
    currPlayer = players[0];
    document.querySelector('#turnDisplay').innerText = 'player1 with symbol X plays now';
});

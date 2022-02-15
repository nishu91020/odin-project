import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Items } from './Items';

function App () {
    const [ score, setScore ] = useState(0);
    const [ HighestScore, setHighestScore ] = useState(0);
    const DivContainer = styled.div`
        font-family: 'Dancing Script', cursive;
        font-family: 'Oswald', sans-serif;
        font-family: 'Redressed', cursive;
        background: linear-gradient(to top, #de5d83 90%, #000 100%);
        color: #ffd1dc;
        padding: 1%;
    `;
    const CardOuterContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    `;
    const DivHeader = styled.div`
        margin-bottom: 3%;
        display: grid;
        grid-template-columns: 6fr 1fr;
    `;
    const shuffleArray = () => {
        for (let i = 0; i < Items.length; i++) {
            let j = Math.floor(Math.random() * (Items.length - i) + i);
            let temp = Items[i];
            Items[i] = Items[j];
            Items[j] = temp;
        }
    };
    const HandleClick = item => {
        console.log(item);
        shuffleArray();
        if (item.selected === true) {
            setHighestScore(Math.max(HighestScore, score));
            setScore(0);
            Items.forEach(ele => {
                ele.selected = false;
            });
            return;
        }
        item.selected = true;
        setScore(score + 1);
    };
    return (
        <DivContainer>
            <DivHeader>
                <div>
                    <h1 style={{ fontSize: '50px' }}>Disney Memory Game</h1>
                    <h2 style={{ fontSize: '30px' }}>Earn points by clicking on cards but don't click any twice!</h2>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <div>Score: {score}</div>
                    <div>Highest Score: {HighestScore}</div>
                </div>
            </DivHeader>
            <CardOuterContainer>{Items.map((item, index) => (index < 8 ? <Card key={item.id} HandleClick={HandleClick} item={item} /> : null))}</CardOuterContainer>
        </DivContainer>
    );
}

export default App;

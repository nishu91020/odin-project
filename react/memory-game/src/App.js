import styled from 'styled-components';
import Card from './Card';
import { Items } from './Items';
function App () {
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
    return (
        <DivContainer>
            <DivHeader>
                <div>
                    <h1 style={{ fontSize: '50px' }}>Disney Memory Game</h1>
                    <h2 style={{ fontSize: '30px' }}>Earn points by clicking on cards but don't click any twice!</h2>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <div>Score: 0</div>
                    <div>Highest Score: 0</div>
                </div>
            </DivHeader>
            <CardOuterContainer>{Items.map(item => <Card cardImg={item.photo} Name={item.name} />)}</CardOuterContainer>
        </DivContainer>
    );
}

export default App;

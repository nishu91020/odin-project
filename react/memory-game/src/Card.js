import React from 'react';
import styled from 'styled-components';

function Card ({ cardImg, Name }) {
    const CardContainer = styled.div`
        background: #fec0cb;
        width: 300px;
        display: grid;
        grid-template-rows: 300px 50px;
        place-content: center;
        padding: 1.5%;
        border-radius: 10px;
        margin: 2%;
        color: #fff;
        font-size: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            transform: scale(1.01);
        }
    `;
    return (
        <CardContainer>
            <img src={cardImg} alt="img" width="300px" style={{ borderRadius: '10px' }} />
            <h2>{Name}</h2>
        </CardContainer>
    );
}

export default Card;

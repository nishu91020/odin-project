import React from 'react';
import styled from 'styled-components';

function Card ({ HandleClick, item }) {
    const CardContainer = styled.div`
        background: #fec0cb;
        width: clamp(250px, 5rem, 100px);
        display: grid;
        grid-template-rows: 250px 50px;
        place-content: center;
        padding: 0.5em;
        border-radius: 10px;
        margin: 2em;
        color: #fff;
        font-size: 1em;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            transform: scale(1.01);
        }
    `;
    return (
        <CardContainer onClick={() => HandleClick(item)}>
            <img src={item.photo} alt={item.name} width="100%" height="250px" style={{ borderRadius: '10px', objectFit: 'cover' }} />
            <h2>{item.name}</h2>
        </CardContainer>
    );
}

export default Card;

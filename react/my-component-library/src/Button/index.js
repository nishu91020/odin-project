import React from 'react';
import styled from 'styled-components';
function Button ({ name, icon, bg, fg, hv }) {
    const BtnContainer = styled.div`
        background-color: ${bg};
        padding: 1em;
        border: 1px solid ${hv};
        color: ${fg};
        &:hover {
            background-color: ${hv};
            border: 1px solid ${bg};
            cursor: pointer;
        }
    `;
    return (
        <BtnContainer>
            <span>{icon}</span>
            <span>{name}</span>
        </BtnContainer>
    );
}

export default Button;

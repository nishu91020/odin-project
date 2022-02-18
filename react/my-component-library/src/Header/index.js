import React, { useState } from 'react';
import styled from 'styled-components';
const HeaderStyle = styled.div`
    background-color: #000;
    color: #fff;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;
function Header () {
    const Hamburger = styled.h1`@media (min-width: 850px) {display: none;}`;
    return (
        <HeaderStyle>
            <Hamburger>X</Hamburger>
            <h2>Header</h2>
        </HeaderStyle>
    );
}

export default Header;

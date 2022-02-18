import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const SideContent = styled.ul`
    list-style: none;
    height: 92vh;
    background: #000;
`;
function Sidebar ({ visible }) {
    const SideContainer = styled.div`
        display: grid;
        grid-template-columns: clamp(10em, 10em, 20em);
        @media (max-width: 850px) {
            display: none;
        }
    `;
    return (
        <SideContainer>
            <SideContent>
                <li>
                    <Button name="Home" hv="#343434" bg="#000" fg="#fff" />
                </li>
                <li>
                    <Button name="Products" hv="#343434" bg="#000" fg="#fff" />
                </li>
                <li>
                    <Button name="Reports" hv="#343434" bg="#000" fg="#fff" />
                </li>
                <li>
                    <Button name="Team" hv="#343434" bg="#000" fg="#fff" />
                </li>
                <li>
                    <Button name="Messages" hv="#343434" bg="#000" fg="#fff" />
                </li>
                <li>
                    <Button name="Support" hv="#343434" bg="#000" fg="#fff" />
                </li>
            </SideContent>
        </SideContainer>
    );
}

export default Sidebar;

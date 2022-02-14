import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserProfile from './img/profile.png';
import React from 'react';
import styled from 'styled-components';
import BtnGroup from './BtnGroup';

function Header () {
    const HeaderContainer = styled.div`
        padding: 1%;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        display: grid;
        grid-template-rows: 80px 80px;
        grid-template-columns: 4fr 1fr;
    `;
    const Input = styled.input`
        width: 50%;
        height: 30px;
        background-color: #f0f8ff;
        border-radius: 10px;
        outline: none;
        border-style: hidden;
        margin-left: 1%;
    `;
    const UserCard = styled.div`
        display: grid;
        grid-template-columns: 0.1fr 0.8fr;
        align-items: center;
    `;
    return (
        <HeaderContainer>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <Input type="text" />
            </div>
            <UserCard>
                <img src={UserProfile} width="70px" alt="user" />
                <h3>Morgan Oakley</h3>
            </UserCard>

            <UserCard>
                <img src={UserProfile} width="90px" alt="user" />
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '19px' }}>Hi there!</p>
                    <h2>Morgan Oakley(@morgan)</h2>
                </div>
            </UserCard>

            <BtnGroup />
        </HeaderContainer>
    );
}

export default Header;

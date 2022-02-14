import React from 'react';
import styled from 'styled-components';
import Profile from './img/profile.png';
function User () {
    const User = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding-top: 2%;
        padding-bottom: 2%;
    `;
    return (
        <User>
            <img src={Profile} alt="user" width="60px" />
            <div>
                <h4>@morgan</h4>
                <p>Super User</p>
            </div>
        </User>
    );
}

export default User;

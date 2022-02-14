import React from 'react';
import styled from 'styled-components';
import { faHome, faMessage, faHistory, faTasks, faUserGroup, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Main = styled.div`
    display: grid;
    grid-auto-rows: 50px;
    font-size: 1.5vw;
    color: white;
    margin-top: 70px;
`;
function Mainmenu () {
    return (
        <Main>
            <span>
                <FontAwesomeIcon icon={faHome} size="1x" color="white" />&nbsp;Home
            </span>
            <span>
                <FontAwesomeIcon icon={faIdCard} size="1x" color="white" />&nbsp;Profile
            </span>
            <span>
                <FontAwesomeIcon icon={faMessage} size="1x" color="white" />&nbsp;Message
            </span>
            <span>
                <FontAwesomeIcon icon={faHistory} size="1x" color="white" />&nbsp;History
            </span>
            <span>
                <FontAwesomeIcon icon={faTasks} size="1x" color="white" />&nbsp;Tasks
            </span>
            <span>
                <FontAwesomeIcon icon={faUserGroup} size="1x" color="white" />&nbsp;Communities
            </span>
        </Main>
    );
}

export default Mainmenu;

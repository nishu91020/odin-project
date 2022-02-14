import React from 'react';
import { Main } from './Mainmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHeadset, faShield } from '@fortawesome/free-solid-svg-icons';
function Othermenu () {
    return (
        <Main>
            {' '}
            <span>
                <FontAwesomeIcon icon={faGear} size="1x" color="white" />&nbsp;Settings
            </span>
            <span>
                <FontAwesomeIcon icon={faHeadset} size="1x" color="white" />&nbsp;Support
            </span>
            <span>
                <FontAwesomeIcon icon={faShield} size="1x" color="white" />&nbsp;Privacy
            </span>
        </Main>
    );
}

export default Othermenu;

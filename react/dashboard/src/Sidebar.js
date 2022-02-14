import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import Mainmenu from './Mainmenu';
import Othermenu from './Othermenu';
function Sidebar () {
    const Aside = styled.aside`
        padding-left: 4%;
        padding-top: 2%;
        display: grid;
        grid-area: 1/1/5/1;
        background: #0892d0;
        color: white;
    `;
    const DashboardHeader = styled.div`
        display: grid;
        grid-template-columns: 50px 150px;
        grid-template-rows: 50px;
    `;
    return (
        <Aside>
            <div className="heading">
                <DashboardHeader>
                    <FontAwesomeIcon icon={faDashboard} size="2x" />
                    <h1>Dashboard</h1>
                </DashboardHeader>
                <Mainmenu />
                <Othermenu />
            </div>
        </Aside>
    );
}

export default Sidebar;

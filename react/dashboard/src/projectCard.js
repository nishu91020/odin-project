import React from 'react';
import styled from 'styled-components';

function ProjectCard () {
    const Card = styled.div`
        background: #fff;
        width: 70%;
        margin: 2%;
        padding: 2.5%;
        padding-left: 5%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-left: 5px solid yellow;
        display: grid;
    `;
    return (
        <Card>
            <h2>Super Cool Project</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero odio, finibus quis fringilla rutrum, dapibus sed dui. Sed blandit, nunc in mollis ultricies,
                justo ante rhoncus metus, nec hendrerit libero nisl semper turpis.
            </p>
        </Card>
    );
}

export default ProjectCard;

import React from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import ProjectCard from './projectCard';
import Trending from './Trending';

function Maincontainer () {
    const Container = styled.div`
        background: #f0f8ff;
        padding: 1%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 4;
    `;
    const Projects = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
    `;
    const Sidecontent = styled.div``;
    return (
        <Container>
            <div>
                <h2>Your Projects</h2>
                <Projects>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Projects>
            </div>
            <Sidecontent>
                <Announcement />
                <Trending />
            </Sidecontent>
        </Container>
    );
}

export default Maincontainer;

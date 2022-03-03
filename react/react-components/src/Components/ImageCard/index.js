import React from 'react';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';
import Animated from 'react-mount-animation';

function ImageCard (props) {
    const { im } = props;

    return (
        <Container>
            <Paper>
                <Animated.div
                    show={true}
                    mountAnim={` 
                            0% {opacity: 0.5}
                            100% {opacity: 1}
                            {transition:ease-in-out 1s}
                        `}
                    time={1}
                    delay={2}
                >
                    {props.children}
                    <h1>{props.data}</h1>
                    <img src={im} alt="" height="300px" style={{ padding: '1em' }} />
                </Animated.div>
            </Paper>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    width: 800px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default ImageCard;

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

/* Material UI Components*/
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carousel (props) {
    const [ index, setIndex ] = useState(0);
    let len = props.children.length ? props.children.length : 1;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % len);
        }, 2000);
        return () => clearInterval(interval);
    });
    return (
        <Container>
            <FiChevronLeft size={40} />
            {props.children[index]}
            <FiChevronRight size={40} />
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex: 1;
`;
export default Carousel;

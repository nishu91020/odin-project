import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

/* App components*/

import ImageCard from '../ImageCard';
import { imgArray } from '../images';
/* Material UI Components*/

function Carousel () {
    const [ index, setIndex ] = useState(0);
    let len = imgArray.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % len);
        }, 2000);
        return () => clearInterval(interval);
    });
    return (
        <Container>
            {imgArray.map((item, ind) => {
                if (ind === index) return <ImageCard im={item} key={ind} />;
                else return '';
            })}
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex: 1;
`;
export default Carousel;

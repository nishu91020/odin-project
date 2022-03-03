import React from 'react';
import Carousel from './Components/Carousel';
import ImageCard from '../src/Components/ImageCard';
import { imgArray } from './Components/images';
function App () {
    return (
        <div>
            <Carousel>
                {imgArray.map((item, ind) => {
                    return <ImageCard im={item} data="asbhagsha" key={ind} />;
                })}
            </Carousel>
        </div>
    );
}

export default App;

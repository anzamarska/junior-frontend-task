import React from 'react';
import {SliderWrapper, SliderLineOne, PartImg, SliderLineTwo} from './styles';
import slide1 from "../../../../assets/photos/slide-1.jpg";
import slide2 from "../../../../assets/photos/slide-2.jpg";
import slide3 from "../../../../assets/photos/slide-3.jpg";
import slide4 from "../../../../assets/photos/slide-4.jpg";
import slide5 from "../../../../assets/photos/slide-5.jpg";
import slide6 from "../../../../assets/photos/slide-6.jpg";


const photos = [slide1, slide2, slide3, slide4, slide5, slide6,slide1, slide2, slide3];

const Slider = () => (
    <SliderWrapper>
        <SliderLineOne>
            {photos.map(photo => <PartImg src={photo} />)}
        </SliderLineOne>
        <SliderLineTwo></SliderLineTwo>
    </SliderWrapper>
);

export default Slider

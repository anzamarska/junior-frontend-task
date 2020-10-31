import React from 'react';
import {SliderWrapper, SliderLineOne, PartImg} from './styles';
import slide1 from "../../../../assets/photos/slide-1.jpg";
import slide2 from "../../../../assets/photos/slide-2.jpg";
import slide3 from "../../../../assets/photos/slide-3.jpg";
import slide4 from "../../../../assets/photos/slide-4.jpg";
import slide5 from "../../../../assets/photos/slide-5.jpg";
import slide6 from "../../../../assets/photos/slide-6.jpg";

const Slider = () => (
    <SliderWrapper>
        <SliderLineOne>
            <PartImg src={slide1} />
            <PartImg src={slide2} />
            <PartImg src={slide3} />
            <PartImg src={slide4} />
            <PartImg src={slide5} />
            <PartImg src={slide6} />
            <PartImg src={slide1} />
            <PartImg src={slide2} />
            <PartImg src={slide3} />
        </SliderLineOne>
    </SliderWrapper>
);

export default Slider

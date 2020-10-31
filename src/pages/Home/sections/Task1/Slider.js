import React from 'react';
import styled from "styled-components";
import slide1 from "../../../../assets/photos/slide-1.jpg";
import slide2 from "../../../../assets/photos/slide-2.jpg";
import slide3 from "../../../../assets/photos/slide-3.jpg";
import slide4 from "../../../../assets/photos/slide-4.jpg";
import slide5 from "../../../../assets/photos/slide-5.jpg";
import slide6 from "../../../../assets/photos/slide-6.jpg";

const SliderWrapper = styled.div`
        height: 200px;
        margin: 15vh auto 0 auto;
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);

        div{
            height: 200px;
            width: 2526px;
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            transform: translate3d(0, 0, 0);
        }

    `;

const SliderLineOne = styled.div`
    animation: moveSlideshow 18s linear infinite;
`

const PartImg = styled.img`
    margin-left: 15px;
    border-radius: 6%;
    height: 100%;
    width: 265.67px;
`

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

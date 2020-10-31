import React from 'react';
import styled from "styled-components";
import slide1 from "../../../../assets/photos/slide-1.jpg";
import slide2 from "../../../../assets/photos/slide-2.jpg";
import slide3 from "../../../../assets/photos/slide-3.jpg";
import slide4 from "../../../../assets/photos/slide-4.jpg";
import slide5 from "../../../../assets/photos/slide-5.jpg";
import slide6 from "../../../../assets/photos/slide-6.jpg";

const SliderImg = styled.img`
    object-fit: contain;
    height: 100%;
    margin: 0 0.8vw;
    border-radius: 6%;
    will-change: transform;
    transition: transform 10s ease-out;
    transform: translateX(0px);
    animation-name: moving-animation;
    animation-duration: 60s;
    animation-iteration-count: infinite;
`

const SliderWrapper = styled.div`
    margin-top: 10vh;
    position: relative;
    width: 100vw;
    height: 10em;
    overflow: hidden;
    right: 24rem;
    `;

const Slider = () => (
    <SliderWrapper>
        <SliderImg src={slide1}/>
        <SliderImg src={slide2}/>
        <SliderImg src={slide3}/>
        <SliderImg src={slide4}/>
        <SliderImg src={slide5}/>
        <SliderImg src={slide6}/>
    </SliderWrapper>
);

export default Slider

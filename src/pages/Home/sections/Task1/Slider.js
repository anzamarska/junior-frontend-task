import React from 'react';
import * as Section from "components/PageSection";
import styled from "styled-components";
import { Wrapper } from 'components/Header/styles';

import slide1 from "../../../../assets/photos/slide-1.jpg";
import slide2 from "../../../../assets/photos/slide-2.jpg";
import slide3 from "../../../../assets/photos/slide-3.jpg";
import slide4 from "../../../../assets/photos/slide-4.jpg";
import slide5 from "../../../../assets/photos/slide-5.jpg";
import slide6 from "../../../../assets/photos/slide-6.jpg";


const SliderImg = styled.img`
//   position: absolute;
  object-fit: contain;
//   width: 100%;
  height: 100%;
  margin: 0 0.8vw;
  border-radius: 6%;
`

const SliderWrapper = styled.div`
    position: relative;
    background-color: grey;
    width: 100vw;
    height: 10em;
    overflow: hidden;
    // ${SliderImg}:nth-child(3) {
        // width: 1000px;
    // }
    `;

// const SliderContent = styled.div`
// position: absolute;
// //   padding: 0.1em 0.9em;
//   background-color: green;
 
// `;


//   margin: 1em;
//   font-size: 1em;
//   background-color: ${(props) => (props.played ? "greenyellow" : "grey")};
//   box-shadow: ${(props) => (props.played ? "0px 0px 4px 2px #ccc" : "none")};

const Slider = () => (
    // <Section.Wrapper>
    //     <Section.Content>
    <SliderWrapper>
        {/* <SliderContent> */}
            <SliderImg src={slide1}/>
        {/* </SliderContent> */}
        {/* <SliderContent> */}
            <SliderImg src={slide2}/>
        {/* </SliderContent> */}
        {/* <SliderContent> */}
            <SliderImg src={slide3}/>
        {/* </SliderContent> */}
        {/* <SliderContent> */}
            <SliderImg src={slide4}/>
        {/* </SliderContent> */}
        {/* <SliderContent> */}
            <SliderImg src={slide5}/>
        {/* </SliderContent> */}
        {/* <SliderContent> */}
            <SliderImg src={slide6}/>
        {/* </SliderContent> */}
    </SliderWrapper>
    //     </Section.Content>
    // </Section.Wrapper>
);

export default Slider

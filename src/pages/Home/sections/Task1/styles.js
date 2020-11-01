import styled from "styled-components";

export const SliderWrapper = styled.div`
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

export const SliderLineOne = styled.div`
    animation: moveSlideshow 18s linear infinite;
`

export const PartImg = styled.img`
    margin-left: 15px;
    border-radius: 6%;
    height: 100%;
    width: 265.67px;
`
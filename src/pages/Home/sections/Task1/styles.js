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

export const SliderLineTwo = styled.div`
    width: 100% !important;
    left: 0;
    background: -moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
`

export const SliderLineOne = styled.div`
    animation: moveSlideshow 18s linear infinite;
`

export const PartImg = styled.img`
    margin-left: 15px;
    border-radius: 6%;
    height: 100%;
    width: 265.67px;
`
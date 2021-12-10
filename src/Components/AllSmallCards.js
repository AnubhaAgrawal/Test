import React from 'react'
import SmallCard from './SmallCard';
import styled, { css } from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from '../nextArrow.svg';
import prevArrow from '../prevArrow.svg';
import image1 from '../image1.svg';
import image2 from '../image2.svg';
import image3 from '../image3.svg';

function AllSmallCards() {
    const [select, setSelect] = React.useState([false, false, false, false]);
    const [prev, setPrev] = React.useState(false);
    const [next, setNext] = React.useState(true);
    const [currindex, setCurrindex] = React.useState(0);
    const sliderRef = React.useRef();
    const setSelectedValue = (val=0) => {
        let t = [false, false, false, false];
        t[val] = true;
        //console.log(t);
        setSelect(t)
    }
    const afterChangeHandler = (currentSlide) => {
        console.log(currentSlide);
        let t = [false, false, false, false];
        t[currentSlide] = true;
        setSelect(t);
        setCurrindex(currentSlide);
     }
    const settings = {
        dots: true,
        autoplay: true,
        //infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
          <div className="ft-slick__dots--custom">
            <div className="loading" />
          </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    initialSlide: 2,
                    slidesToShow: 1
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    const data =[
        {
            name: 'Viezh Robert',
            rating: '4.5',
            address: 'Warsaw, Poland',
            content: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
            image: image1
        },
        {
            name: 'Yessica Christy',
            rating: '4.5',
            address: 'Shanxi, China',
            content: '“I like it because I like to travel far and still can connect with high speed.”.',
            image: image2
        },
        {
            name: 'Kim Young Jou',
            rating: '4.5',
            address: 'Seoul, South Korea',
            content: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
            image: image3
        },
        {
            name: 'Yessica Christy',
            rating: '4.5',
            address: 'Shanxi, China',
            content: '“I like it because I like to travel far and still can connect with high speed.”.',
            image: image2
        }

    ]

    return (
        <div>
        <SliderWrapper>
        <Slider ref={sliderRef} {...settings} afterChange={afterChangeHandler}>
           {
            data.map((val, index)=>{
            return(<div key={index} onClick={()=>{setSelectedValue(index)}} >
            <SmallCard selected={select[index]} name={val.name} rating={val.rating} address={val.address} content={val.content} image={val.image}/>
            </div>)
            })
           }
      </Slider>
      </SliderWrapper>
      <FlexContainer>
      <PrevButton select={prev} onClick={()=>{sliderRef.current.slickPrev(); setPrev(true); setNext(false);}}><Image select={prev} src={prev ? nextArrow : prevArrow}></Image></PrevButton>
      <PrevButton select={next} onClick={()=>{sliderRef.current.slickNext(); setPrev(false); setNext(true);}}><Image select={!next} src={!next ? prevArrow : nextArrow}></Image></PrevButton>
      </FlexContainer>
      </div>
    )
}

export default AllSmallCards

const FlexContainer = styled.div`
     @media only screen and (max-width : 992px) {
            position: inherit;
            padding-left: 78%;
      }
      @media only screen and (max-width : 768px) {
            position: inherit;
            padding-left: 58%;
       }
    display: flex;
    position: absolute;
    right: 50px;
`;

const PrevButton = styled.p`
height: 60px;
width: 60px;
border: 2px solid #F53838;
border-radius: 50%;
margin-right: 20px;
${props => props.select && css`
background: #F53838;
`}
`;

const Image = styled.img`
margin: 20px;
${props => props.select && css`
transform: rotate(180deg);
`}
`;




const SliderWrapper = styled.div`

  .slick-list {
    padding:0 20% 0 0 !important;
  }
  /* Slider */
  .slick-slider {
    margin-bottom: 8px;

    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    /* overflow: hidden; */

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: red;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -90px;
    left: -46%;
    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
     @media only screen and (max-width : 768px) {
        display: none;
    }
    @media only screen and (max-width : 992px) {
        display: none;
    }
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 10px;
    height: 10px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 10px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }

  /* Custom Slick Dots */

  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  .ft-slick__dots--custom {
    height: 8px;
    width: 14px;
    background-color: #e5e7e9;
    border-radius: 4px;
    position: relative;
  }

  .slick-dots li {
    width: 14px;
    margin: 0 2px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active {
    width: 26px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    width: 26px;
    top: 0px;
    overflow: hidden;

    .loading {
      height: 8px;
      animation: loading 5s ease-in;
      background-image: linear-gradient(270deg, #F53838, #F53838);
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
    }
  }
`;
